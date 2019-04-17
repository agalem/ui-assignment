const showContainer = () => {
    const clickedBtn = event.currentTarget.name;
    const toHide = document.getElementById(clickedBtn + '-close');
    const toShow = document.getElementById(clickedBtn + '-open');
    const section = document.getElementById(clickedBtn +'-section');

    section.classList.add('margin-bottom');

    toHide.classList.remove('show');
    toHide.classList.add('hide');

    toShow.classList.remove('hide');
    toShow.classList.add('show');
};

const hideContainer = () => {
    const clickedBtn = event.currentTarget.name;
    const toHide = document.getElementById(clickedBtn + '-open');
    const toShow = document.getElementById(clickedBtn + '-close');
    const section = document.getElementById(clickedBtn +'-section');

    section.classList.remove('margin-bottom');

    toHide.classList.remove('show');
    toHide.classList.add('hide');

    toShow.classList.remove('hide');
    toShow.classList.add('show');
};

const handleActiveSquare = () => {
    const activeSquareId = document.getElementsByClassName('square-active')[0].getAttribute('id');
    const activeSquare = document.getElementById(activeSquareId);
    activeSquare.classList.remove('square-active');
    document.getElementById(event.currentTarget.id).classList.add('square-active');
};

const toggleSection = () => {
    const  clickedBtn = event.currentTarget.name + '-body';
    const  section = document.getElementById(clickedBtn);
    section.classList.toggle('show');
    section.classList.toggle('hide');
};
