export class AtomicDate extends Date {
  [Symbol.toPrimitive](hint) {
    if (hint === "number" || hint === "default") {
      if (isNaN(this.getTime())) {
        return NaN;
      }

      const year = String(this.getFullYear());
      const month = String(
        // Months are zero-indexed
        this.getMonth() + 1,
      ).padStart(2, "0");
      const day = String(this.getDate()).padStart(2, "0");
      return Number(year + month + day);
    }

    return super[Symbol.toPrimitive](hint);
  }

  toDate() {
    return new Date(this);
  }
}
