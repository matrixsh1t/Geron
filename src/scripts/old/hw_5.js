// Сделать приложение по переводу заявок.
// Статусы:
// CREATED - заявка создана сотрудником и передана руководителю
// SENT - руководитель отправил заявку на исполнение
// RECEIVED - сотрудник подтверждает заявку
// COMPLETED - бухгалтер подтверждает завершение заявки
// Результатом выполнение программы должно быть сообщение о текущем нахождении заявки.
var Statuses;
(function (Statuses) {
    Statuses[Statuses["CREATED"] = 0] = "CREATED";
    Statuses[Statuses["SENT"] = 1] = "SENT";
    Statuses[Statuses["RECEIVED"] = 2] = "RECEIVED";
    Statuses[Statuses["COMPLETED"] = 3] = "COMPLETED";
})(Statuses || (Statuses = {}));
var orderStatus;
var currentStatus = function (orderStatus) {
    switch (orderStatus) {
        case Statuses.CREATED:
            return 'заявка создана сотрудником и передана руководителю';
        case Statuses.SENT:
            return 'руководитель отправил заявку на исполнение';
        case Statuses.RECEIVED:
            return 'сотрудник подтверждает заявку';
        case Statuses.COMPLETED:
            return 'бухгалтер подтверждает завершение заявки';
    }
};
console.log("---Задача 1---");
orderStatus = Statuses.CREATED;
console.log(currentStatus(orderStatus));
orderStatus = Statuses.COMPLETED;
console.log(currentStatus(orderStatus));
// Бухгалтер ведет учет доходов по 5 компаниям. 
// Вывести зарплату бухгалтера за месяц, с учетом что он получает 30% от общих доходов каждой компании. 
// Если доход бухгалтера с компании меньше 120 000, то учитывать доход с этой компании как 120 000.
var Income;
(function (Income) {
    Income[Income["COMPANY1"] = 1000000] = "COMPANY1";
    Income[Income["COMPANY2"] = 2000000] = "COMPANY2";
    Income[Income["COMPANY3"] = 3000000] = "COMPANY3";
    Income[Income["COMPANY4"] = 4000000] = "COMPANY4";
    Income[Income["COMPANY5"] = 500000] = "COMPANY5";
})(Income || (Income = {}));
var accountantSalary = function () {
    return (Income.COMPANY1 * 0.3 > 120000 ? Income.COMPANY1 * 0.3 : 120000) +
        (Income.COMPANY2 * 0.3 > 120000 ? Income.COMPANY2 * 0.3 : 120000) +
        (Income.COMPANY3 * 0.3 > 120000 ? Income.COMPANY3 * 0.3 : 120000) +
        (Income.COMPANY4 * 0.3 > 120000 ? Income.COMPANY4 * 0.3 : 120000) +
        (Income.COMPANY5 * 0.3 > 120000 ? Income.COMPANY5 * 0.3 : 120000);
};
console.log("---Задача 2---");
console.log(accountantSalary());
// В социальной сети у пользователя есть время, как давно он в ней зарегистрирован (в годах). 
// Вывести что пользователь новичок если он зарегистрирован меньше 2-ух лет, 
// если до 4 лет, то “страж”, если больше 4,то “магистр”
var UserRank;
(function (UserRank) {
    UserRank["NEWBIE"] = "Newbie";
    UserRank["SENTINEL"] = "Sentinel";
    UserRank["MASTER"] = "Master";
})(UserRank || (UserRank = {}));
var showRank = function (exp) {
    if (exp < 2) {
        return UserRank.NEWBIE;
    }
    else if (exp >= 2 && exp < 4) {
        return UserRank.SENTINEL;
    }
    else if (exp >= 4) {
        return UserRank.MASTER;
    }
    else {
        return 'unexpected error';
    }
};
console.log("---Задача 3---");
var userExp = 3;
console.log(showRank(userExp));
// Пользователь оформляет заказ в сервисе по доставке еды. 
// Вывести стоимость заказа, но при заказе от 4000 отобразить, что доставка бесплатна, 
// если пользователь применил промокод, то сделать скидку в 15% на стоимость заказа.
var order = function (sum, promo) {
    var message = '';
    var promoStatus = '';
    if (sum > 4000) {
        message = "Delivery is free.";
    }
    if (promo) {
        sum = sum - sum * 0.15;
        promoStatus = 'With promocode.';
    }
    return "Your order cost is ".concat(sum, ". ").concat(promoStatus, " ").concat(message);
};
console.log("---Задача 4---");
console.log(order(3000, true));
console.log(order(5000, true));
console.log(order(3000, false));
console.log(order(5000, false));
