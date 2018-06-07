function handleActiveSquare() {
    var activeSquareId = document.getElementsByClassName('square-active')[0].getAttribute('id');
    var activeSquare = document.getElementById(activeSquareId);
    activeSquare.classList.remove('square-active');
    document.getElementById(event.currentTarget.id).classList.add('square-active');
}