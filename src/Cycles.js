/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;

    if (start == end && start % 2 == 0) {
        sum += start;
    }

    if (start < end) {
        for (let i = start; i < end + 1; i++) {
            if (i % 2 == 0) {
                sum += i;
            }
        }
    }

    if (start > end) {
        for (let i = end; i < start + 1; i++) {
            if (i % 2 == 0) {
                sum += i;
            }
        }
    }

    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(x) {
    let k = 0;

    while (x > 0.1) {
        x /= 2;
        k++;
    }

    return k;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(text) {
    let n = text.length;

    let newText = '';

    let i = 0;
    do {
        if ((i + 1) % 3 != 0) {
            newText += text[i];
        } else {
            newText += '_';
        }
        i++;
    } while (i < n);

    return newText;
}
