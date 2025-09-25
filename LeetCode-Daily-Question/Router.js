class Router {
    constructor(memoryLimit) {
        this.memoryLimit = memoryLimit;
        this.queue = []; // FIFO queue of packets
        this.set = new Set(); // to detect duplicates: key = "source|destination|timestamp"
        this.destMap = new Map(); // destination -> array of timestamps (sorted, since addPacket timestamps increase)
    }

    addPacket(source, destination, timestamp) {
        const key = `${source}|${destination}|${timestamp}`;
        if (this.set.has(key)) return false; // duplicate

        // If memory full, evict oldest
        if (this.queue.length === this.memoryLimit) {
            const old = this.queue.shift();
            const oldKey = `${old[0]}|${old[1]}|${old[2]}`;
            this.set.delete(oldKey);

            // remove old timestamp from destMap
            const arr = this.destMap.get(old[1]);
            if (arr) {
                // arr is sorted, oldest first
                if (arr.length && arr[0] === old[2]) {
                    arr.shift(); // optimization: often oldest
                } else {
                    // fallback search
                    const idx = arr.indexOf(old[2]);
                    if (idx >= 0) arr.splice(idx, 1);
                }
                if (arr.length === 0) this.destMap.delete(old[1]);
            }
        }

        // Add new packet
        this.queue.push([source, destination, timestamp]);
        this.set.add(key);

        if (!this.destMap.has(destination)) {
            this.destMap.set(destination, []);
        }
        this.destMap.get(destination).push(timestamp);

        return true;
    }

    forwardPacket() {
        if (this.queue.length === 0) return [];
        const pkt = this.queue.shift();
        const key = `${pkt[0]}|${pkt[1]}|${pkt[2]}`;
        this.set.delete(key);

        // remove from destMap
        const arr = this.destMap.get(pkt[1]);
        if (arr) {
            if (arr.length && arr[0] === pkt[2]) {
                arr.shift();
            } else {
                const idx = arr.indexOf(pkt[2]);
                if (idx >= 0) arr.splice(idx, 1);
            }
            if (arr.length === 0) this.destMap.delete(pkt[1]);
        }
        return pkt;
    }

    getCount(destination, startTime, endTime) {
        const arr = this.destMap.get(destination);
        if (!arr || arr.length === 0) return 0;

        // Binary search helpers
        const lowerBound = (x) => {
            let l = 0, r = arr.length;
            while (l < r) {
                const m = (l + r) >> 1;
                if (arr[m] < x) l = m + 1;
                else r = m;
            }
            return l;
        };
        const upperBound = (x) => {
            let l = 0, r = arr.length;
            while (l < r) {
                const m = (l + r) >> 1;
                if (arr[m] <= x) l = m + 1;
                else r = m;
            }
            return l;
        };

        const left = lowerBound(startTime);
        const right = upperBound(endTime);
        return right - left;
    }
}

/** 
 * Usage example:
 * var router = new Router(3);
 * console.log(router.addPacket(1, 4, 90)); // true
 * console.log(router.addPacket(2, 5, 90)); // true
 * console.log(router.addPacket(1, 4, 90)); // false
 * console.log(router.addPacket(3, 5, 95)); // true
 * console.log(router.addPacket(4, 5, 105)); // true (evicts [1,4,90])
 * console.log(router.forwardPacket()); // [2,5,90]
 * console.log(router.addPacket(5, 2, 110)); // true
 * console.log(router.getCount(5, 100, 110)); // 1
 */
