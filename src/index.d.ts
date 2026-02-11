/**
 * Specialized kind of `Date` that is represented as a human-readable integer.
 *
 * @example
 * ```js
 * const atomicDate = new AtomicDate("2026-01-11");
 * console.log(Number(atomicDate)); // 20260111
 * ```
 */
export default class AtomicDate extends Date {
  /**
   * Converts back to a `Date`.
   *
   * @example
   * ```js
   * const atomicDate = new AtomicDate("2026-01-11");
   * const date = atomicDate.toDate();
   * console.log(Number(date)); // 1768089600000
   * ```
   */
  toDate(): Date;
}
