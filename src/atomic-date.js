export class AtomicDate extends Date {
  [Symbol.toPrimitive](hint) {
    if (hint === "number" || hint === "default") {
      if (isNaN(this.getTime())) {
        return NaN;
      }

      const year = String(this.getUTCFullYear());
      const month = String(
        // Months are zero-indexed
        this.getUTCMonth() + 1,
      ).padStart(2, "0");
      const day = String(this.getUTCDate()).padStart(2, "0");
      return Number(year + month + day);
    }

    return super[Symbol.toPrimitive](hint);
  }

  toDate() {
    return new Date(this);
  }
}
