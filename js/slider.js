$(function(){

    var moveSlide = function(container, slideNum){
        var items = container.find('.slider__item'),
        active = items.filter('.active'),
        reqItem = items.eq(slideNum),
        reqIndex = reqItem.index(),
        ul = container.find('.slider__ul'),
        time = 500;

        if(reqItem.length){

            ul.animate({
                'left': -reqIndex * 100 + '%'
            }, time, function(){
                active.removeClass('active');
                reqItem.addClass('active')
            });
        }
    }

    $('.button').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
        container = $this.closest('.slider__block'),
        items = $('.slider__item', container),
        activeItem = items.filter('.active'),
        nextItem = activeItem.next(),
        prevItem = activeItem.prev();

        if($this.hasClass('right')){
            moveSlide(container, nextItem.index());
        }
        else{
            moveSlide(container, prevItem.index());
        }
    })
})