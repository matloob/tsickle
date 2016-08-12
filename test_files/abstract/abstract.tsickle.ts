Warning at test_files/abstract/abstract.ts:2:3: unhandled anonymous type
====
abstract class Base {
  abstract foo(): void;
/**
 * @return {void}
 */
bar() { this.foo(); }

  static _tsickle_typeAnnotationsHelper() {
 /** @type {?} */
Base.prototype.foo;
  }

}