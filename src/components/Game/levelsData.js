const levels = [
    {
        bgImg: 7,
        corect: 12,
        nocorect: 12,
        animatePlus: [
            { id: 28, style: { left: '33.7em', top: '18.3em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 30, style: { left: '132.9em', top: '24.1em', width: '20.2em', height: '56.2em' } },//Парень не гиф с колокой на плече
        ],
        animateMinus: [
            { id: 28, style: { left: '33.7em', top: '18.3em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 30, style: { left: '132.9em', top: '24.1em', width: '20.2em', height: '56.2em' } },//Парень не гиф с колокой на плече
        ]
    },
    {
        bgImg: 16,
        corect: 17,
        nocorect: 18,
        animatePlus: [
            { id: 28, style: { left: '39.4em', top: '18.3em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            // { id: 31, style: { left: '88.8em', top: '39.9em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 32, style: { left: '18.4em', top: '33em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 33, style: { left: '56.9em', top: '30em', width: '26.1em', height: '56.4em' } }, //Парень с микрофоном
            { id: 34, style: { left: '103em', top: '32em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом
        ],
        animateMinus: [
            { id: 28, style: { left: '39.4em', top: '18.3em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 30, style: { left: '26.2em', top: '24.1em', width: '20.2em', height: '56.2em' } },//Парень не гиф с колокой на плече
            { id: 34, style: { left: '103em', top: '32em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом
            { id: 35, style: { left: '129.9em', top: '27.6em', width: '31em', height: '60em' } }, //Девушка с микрофоном в розовой
        ]
    },
    {
        bgImg: 20,
        corect: 21,
        nocorect: 22,
        animatePlus: [
            { id: 28, style: { left: '30.5em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            // { id: 31, style: { left: '97.9em', top: '55.4em', width: '16.8em', height: 'auto' } }, //Колонка
            { id: 37, style: { left: '26.7em', top: '30.3em', width: '37.6em', height: '57.4em' } },//Тансующая пара
            { id: 34, style: { left: '103em', top: '32em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом платье
            { id: 38, style: { left: '134.2em', top: '27.8em', width: '32.3em', height: '53em' } }, //Девушка в жёлтом платье
            { id: 39, style: { left: '136em', top: '47.4em', width: '41em', height: '40.4em' } }, //Девушка в кресле не gif
        ],
        animateMinus: [
            { id: 28, style: { left: '39.4em', top: '18.3em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            // { id: 31, style: { left: '74.2em', top: '32em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 34, style: { left: '103em', top: '32em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом
            { id: 33, style: { left: '136.6em', top: '30.4em', width: '26.1em', height: '56.4em' } }, //Парень с микрофоном
        ]
    },
    {
        bgImg: 23,
        corect: 36,
        nocorect: 24,
        animatePlus: [
            { id: 28, style: { left: '39.5em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 40, style: { left: '121em', top: '25.6em', width: '20.4em', height: '44.1em' } },//Девушка с микрофоном JBL
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 37, style: { left: '45.1em', top: '30em', width: '37.6em', height: '57.4em' } },//Танцующая пара
            { id: 34, style: { left: '100em', top: '31.9em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом платье
            // { id: 31, style: { left: '63.4em', top: '11.6em', width: '11.8em', height: '6em' } }, //Колонка
        ],
        animateMinus: [
            { id: 28, style: { left: '39.4em', top: '18.3em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            // { id: 31, style: { left: '98.2em', top: '55.5em', width: '14.8em', height: '7.6em' } }, //Колонка
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 41, style: { left: '122.8em', top: '20.3em', width: '20.4em', height: '62.5em' } }, //Парень с поднятой рукой
            { id: 35, style: { left: '50.5em', top: '27.6em', width: '31em', height: '60em' } }, //Девушка с микрофоном в розовой
        ]
    },
    {
        bgImg: 25,
        corect: 26,
        nocorect: 46,
        animatePlus: [
            { id: 28, style: { left: '39.5em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 42, style: { left: '83.6em', top: '21.5em', width: '16.6em', height: '43.2em' } },//Девушка в белом коротком платье
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 43, style: { left: '131.2em', top: '26.6em', width: '19.4em', height: '45.9em' } },//Девушка в коротком голубом платье
            { id: 30, style: { left: '123.1em', top: '24em', width: '20.2em', height: '56.2em' } },//Парень не гиф с колокой на плече
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 44, style: { left: '43em', top: '31.5em', width: '27.7em', height: '55.5em' } }, //Удевленная девушка не gif
            { id: 45, style: { left: '71.4em', top: '50.3em', width: '44.9em', height: '28.7em' } }, //Стол не gif
            { id: 34, style: { left: '103.1em', top: '31.9em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом платье
            // { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
        ],
        animateMinus: [
            { id: 28, style: { left: '37.1em', top: '18.5em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            // { id: 31, style: { left: '59.2em', top: '11.8em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
        ]
    },
    {
        bgImg: 47,
        corect: 51,
        nocorect: 52,
        animatePlus: [
            { id: 28, style: { left: '39.2em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            // { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 32, style: { left: '6.3em', top: '23.4em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            // { id: 31, style: { left: '75.9em', top: '54.7em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 49, style: { left: '6em', top: '31.7em', width: '41.9em', height: '55.1em' } }, //Девушка в свитере
            { id: 50, style: { left: '55.3em', top: '33.1em', width: '25.9em', height: '54.8em' } }, //Девушка коряга
            { id: 35, style: { left: '97.2em', top: '27.1em', width: '31em', height: '60em' } }, //Девушка с микрофоном в розовой
        ],
        animateMinus: [
            { id: 28, style: { left: '39.4em', top: '18.5em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            // { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            // { id: 31, style: { left: '85em', top: '55.2em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 53, style: { left: '97.9em', top: '50.3em', width: '19.6em', height: '15.2em' } }, //Пицца на столе не gif
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 54, style: { left: '118.9em', top: '31.7em', width: '18em', height: '54.1em' } }, //Девушка спиной в штанах
        ]
    },
    {
        bgImg: 55,
        corect: 56,
        nocorect: 57,
        animatePlus: [
            { id: 28, style: { left: '39.2em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 31, style: { left: '75.9em', top: '54.7em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 37, style: { left: '45.1em', top: '30em', width: '37.6em', height: '57.4em' } },//Танцующая пара
            { id: 34, style: { left: '103em', top: '31.9em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом платье
        ],
        animateMinus: [
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 31, style: { left: '90.6em', top: '55.9em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 58, style: { left: '25.3em', top: '31.2em', width: '30.9em', height: '49.4em' } }, //Пара медленный танец
        ]
    },
    {
        bgImg: 60,
        corect: 62,
        nocorect: 63,
        animatePlus: [
            { id: 28, style: { left: '39.2em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 29, style: { left: '143.2em', top: '16.8em', width: '14.6em', height: '43.8em' } },//Парень с рюкзаком
            { id: 31, style: { left: '75.9em', top: '54.7em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 37, style: { left: '45.1em', top: '30em', width: '37.6em', height: '57.4em' } },//Танцующая пара
            { id: 33, style: { left: '122.8em', top: '28.6em', width: '26.1em', height: '56.4em' } }, //Парень с микрофоном
            { id: 34, style: { left: '103em', top: '31.9em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом платье
            { id: 61, style: { left: '136em', top: '47.5em', width: '46.8em', height: '40.4em' } }, //Девушка в кресле Вероника
        ],
        animateMinus: [
            { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 31, style: { left: '92.8em', top: '55.3em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 64, style: { left: '29.1em', top: '24.4em', width: '17.1em', height: '59.4em' } }, //Девушка с поднятой рукой
        ]
    },
    {
        bgImg: 65,
        corect: 66,
        nocorect: 67,
        animatePlus: [
            { id: 28, style: { left: '39.2em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 31, style: { left: '75.9em', top: '54.7em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 32, style: { left: '23.7em', top: '32.7em', width: '26.4em', height: '52.1em' } }, //Девушка спиной
            { id: 37, style: { left: '45.1em', top: '30em', width: '37.6em', height: '57.4em' } },//Танцующая пара
            { id: 34, style: { left: '85.9em', top: '31.77em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом платье
            { id: 54, style: { left: '117em', top: '29em', width: '18em', height: '53.7em' } }, //Девушка спиной в штанах
        ],
        animateMinus: [
            { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 31, style: { left: '92.8em', top: '55.3em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 49, style: { left: '4.1em', top: '31.3em', width: '41.9em', height: '55.1em' } }, //Девушка в свитере
            { id: 68, style: { left: '126.4em', top: '27.9em', width: '19.4em', height: '53.2em' } }, //Подозрительный чел
        ]
    },
    {
        bgImg: 70,
        corect: 72,
        nocorect: 73,
        animatePlus: [
            { id: 28, style: { left: '131.2em', top: '18.4em', width: '22.9em', height: '42.1em' } },//Парень в розовой рубашке
            { id: 31, style: { left: '59.2em', top: '3.5em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 31, style: { left: '95.6em', top: '54.7em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 37, style: { left: '34.3em', top: '28.6em', width: '34.4em', height: '52.5em' } },//Танцующая пара
            { id: 34, style: { left: '65.1em', top: '31.2em', width: '27.9em', height: '55.5em' } }, //Девушка в зеленом платье
            { id: 38, style: { left: '116.1em', top: '27.8em', width: '32.3em', height: '53em' } }, //Девушка в жёлтом платье
            { id: 33, style: { left: '143.4em', top: '28.6em', width: '26.1em', height: '56.4em' } }, //Парень с микрофоном
            { id: 71, style: { left: '8.9em', top: '31.7em', width: '26.9em', height: '55.7em' } }, //Бешеная танцовщица
        ],
        animateMinus: [
            { id: 74, style: { left: '39.6em', top: '19.2em', width: '12.5em', height: '41em' } }, //Мальчик
            { id: 31, style: { left: '59.3em', top: '11.7em', width: '11.8em', height: '6em' } }, //Колонка
            { id: 31, style: { left: '92.8em', top: '55.3em', width: '15.8em', height: '8.1em' } }, //Колонка
            { id: 33, style: { left: '101.3em', top: '30.7em', width: '26.1em', height: '56.4em' } }, //Парень с микрофоном
        ]
    },
];

export default levels;