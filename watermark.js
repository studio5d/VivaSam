// watermark.js - Add watermarks to images to prevent downloading

const watermarkManager = {
  watermarkText: 'Studio 5D © - Not for Download',
  
  init() {
    this.addWatermarksToGallery();
    this.observeNewImages();
    this.addDownloadProtection();
  },
  
  addWatermarksToGallery() {
    // Add watermarks to existing gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      this.addWatermarkToItem(item, index);
    });
  },
  
  addWatermarkToItem(item, index) {
    // Check if watermark already exists
    if (item.querySelector('.watermark-text')) {
      return;
    }
    
    const watermarkDiv = document.createElement('div');
    watermarkDiv.className = 'watermark-text';
    watermarkDiv.textContent = this.watermarkText;
    watermarkDiv.style.zIndex = '100';
    watermarkDiv.style.pointerEvents = 'none';
    
    // Add event listeners to prevent interactions with images
    item.addEventListener('mousedown', (e) => {
      if (e.button === 2) { // Right-click
        e.preventDefault();
        return false;
      }
    });
    
    item.appendChild(watermarkDiv);
  },
  
  observeNewImages() {
    // Use MutationObserver to watch for new gallery items
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (galleryGrid) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach((node) => {
              if (node.classList && node.classList.contains('gallery-item')) {
                this.addWatermarkToItem(node);
              }
            });
          }
        });
      });
      
      observer.observe(galleryGrid, {
        childList: true,
        subtree: false
      });
    }
  },
  
  addDownloadProtection() {
    // Disable right-click on all images
    document.addEventListener('contextmenu', (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    }, true);
    
    // Disable dragging images
    document.addEventListener('dragstart', (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    }, true);
    
    // Disable image selection via keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+C (Copy)
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        const selectedText = window.getSelection().toString();
        if (!selectedText) {
          e.preventDefault();
          return false;
        }
      }
    });
    
    // Prevent image context menu on long-press (mobile)
    document.addEventListener('touchstart', (e) => {
      if (e.target.tagName === 'IMG') {
        let touchTimer;
        touchTimer = setTimeout(() => {
          e.preventDefault();
        }, 1000);
        
        document.addEventListener('touchend', () => {
          clearTimeout(touchTimer);
        }, { once: true });
      }
    }, true);
    
    // Disable copy of images
    document.addEventListener('copy', (e) => {
      const selectedText = window.getSelection().toString();
      if (!selectedText) {
        e.preventDefault();
        return false;
      }
    });
  }
};

// Initialize watermarks when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    watermarkManager.init();
  });
} else {
  watermarkManager.init();
}
