class Carousel {
  constructor(images) {
    this.images = images;
    this.currentIndex = 0;
    this.container = $('p').eq(1);
  }

  init() {
    this.showImage(this.currentIndex);
    this.setupEventListeners();
  }

  showImage(index) {
    const imgElement = this.container.find('img');
    if (imgElement.length === 0) {
      this.container.append($('<img>').attr('src', this.images[index]));
    } else {
      imgElement.attr('src', this.images[index]);
    }
  }

  setupEventListeners() {
    const self = this;

    $('button[name="prevButton"]').on('click', function() {
      self.currentIndex = (self.currentIndex === 0) ? self.images.length - 1 : self.currentIndex - 1;
      self.showImage(self.currentIndex);
    });

    $('button[name="nextButton"]').on('click', function() {
      self.currentIndex = (self.currentIndex === self.images.length - 1) ? 0 : self.currentIndex + 1;
      self.showImage(self.currentIndex);
    });
  }
}
  const carousel = new Carousel([
    "./multimedia/2ff50463f390c832f8e7ab1aad07b0ac-2246696920.png",
    "./multimedia/3988_1190708513-2366469228.png",
    "./multimedia/morcin-2119726635.png",
    "./multimedia/santa-eulalia-morcin-1342017553-16-1652275958.png",
    "./multimedia/penerudes-morcin.png"
  ]);
  carousel.init();
