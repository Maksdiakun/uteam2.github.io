


$('.more_text_header').click(function (event) {
    const title = event.currentTarget;
    $(title).next().slideToggle(300);
    $(title).toggleClass('active_mark');
});


$(document).ready(function () {
    let text = $('.main_cont p').text();
    const cutText = () => {
        let newText = text.substring(0, 200);
        newText = newText + '...' + '   ';
        $('.main_cont p').html(newText);
    }
    cutText();

    $('.tel_number').mask("38(000)000-00-00", {
        translation: {

            placeholder: "38(000)__/__/____"
        }
    });
});
$('.mobile_menu_btn').click(event => {
    $(event.currentTarget).toggleClass('active_menu_btn');
    $('.mobile_menu').toggleClass('active_mobile_menu');
});
$('.mobile_question_btn').click(event => {
    event.preventDefault();
    $('.question_side_wrap').addClass('mobile_question_actv');
});
$('.question_side .under_line').click(event => {
    event.preventDefault();
    $('.question_side_wrap').removeClass('mobile_question_actv');
});
$('.header_phone').click(event => {
    $('.call_modal').slideDown(400);
});

$(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.header_phone') && !$(target).parents().is('.header_phone')) {
        $('.call_modal').slideUp(400);
    }
});
(function () {  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
    var a = document.querySelector('.question_side'), b = null;  // селектор блока, который нужно закрепить
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
    function Ascroll() {
        if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
            var Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');  // создать потомка
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
            a.style.padding = '0';
            a.style.border = '0';  // если элементу присвоен padding или border
        }
        if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
            b.className = 'sticky';
        } else {
            b.className = '';
        }
        window.addEventListener('resize', function () {
            a.children[0].style.width = getComputedStyle(a, '').width
        }, false);  // если изменить размер окна браузера, измениться ширина элемента
    }
})()