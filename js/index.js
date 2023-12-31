document.addEventListener('DOMContentLoaded', () => {
    const rockItems = document.querySelectorAll('.rock__item')  //rockItem.childNodes[0].offsetWidth
    let index = rockItems.length - 1;
    const addClassWithDelay = () => {
      if (index < rockItems.length) {
        rockItems[index].classList.add('animation');
        index--;
        setTimeout(addClassWithDelay, 40);
      }
    }

    addClassWithDelay();

    setTimeout(() => {
      const rockText = document.querySelectorAll('.rock__text');

      rockItems.forEach((item) => {
        const array = Array.from(rockItems)
        const index = array.indexOf(item)
        const width = rockText[index].offsetWidth
        const borderWidth = 3

        item.style.maxWidth = +width + borderWidth*2 + 'px';

        item.classList.contains('rock__item--rotate') && item.classList.remove('active')
        
      })
    }, 800)



    setTimeout(() => {
    const titles = document.querySelectorAll('.articul__title');
        titles.forEach((item) => {
            item.classList.remove('active')
        })
    }, 1000)

    setTimeout(() => {
        const headerContent = document.querySelector('.articul__header-content');
        headerContent.classList.remove('active')
        }, 2000)
})


//accordion opening
const accordionPlus = document.querySelectorAll('.accordion__plus')

accordionPlus.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
        const content = item.parentElement.nextElementSibling
        content.classList.toggle('active')
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 80 + 'px'

        } else {
            content.style.maxHeight = null
        }
    })
})


//footer observers
const arrow = document.querySelector('.arrow');
const footerText = document.querySelector('.articul__footer-text');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        arrow.classList.remove('active')
      }
    });
  };

  const callbackForText = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footerText.classList.remove('active')
      }
    });
  }
  
  const observer = new IntersectionObserver(callback, options);
  const observerForText = new IntersectionObserver(callbackForText, options);
  
  observer.observe(arrow);
  observerForText.observe(footerText);
