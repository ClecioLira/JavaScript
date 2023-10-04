// ELAS CONSEGUEM PAUSAR O CÓDIGO EM DETERMINADO MOMENTO

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function* contador() {
    let i = 0

    while(true) {
        yield i
        i++
    }
}

function* delega() {
    yield 0
    yield 1
    yield 2
}

function* geradora4() {
    yield* delega()
    yield 3
    yield 4
    yield 5
}

function* geradora5() {
    yield function() {
        console.log("vim do y1")
    }

    yield function() {
        console.log("vim do y2")
    }
}
const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
func1()
func2()