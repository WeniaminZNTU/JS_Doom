"use strict";

class Slide {
  constructor(src, description) {
    this._src = src;
    this._description = description;
  }

  get src() {
    return this._src;
  }

  get description() {
    return this._description;
  }
}

class Slider {
  /**
   *
   * @param {Slides} slides
   * @param {number} currentIndex
   */
  constructor(slides, currentIndex = 0) {
    this._slides = slides;
    this._currentIndex = currentIndex;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(newIndex) {
    if( !Number.isInteger(newIndex)){
      throw new TypeError('Index must be integer');
    }

    if(newIndex > this.length || newIndex < 0){
      throw new RangeError(`Index must be i range 0 and ${this.length - 1}`);
    }

    return (this._currentIndex = newIndex);
  }

  get nextIndex() {
    return (this.currentIndex + 1) % this._slides.length;
  }

  get prevIndex() {
    return (this.currentIndex - 1 + this._slides.length) % this._slides.length;
  }

  get currentSlide() {
    return this._slides[this.currentIndex];
  }
}
