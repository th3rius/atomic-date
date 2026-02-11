export class AtomicDate extends Date {
  valueOf() {
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

  toDate() {
    return new Date(this);
  }
}
