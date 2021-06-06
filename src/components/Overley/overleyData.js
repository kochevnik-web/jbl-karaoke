const overleyData = [
    [
        {
            idBg: 8,
            content: '<span>Атмосфера на караоке-вечеринке зависит и от того, насколько хорошо ты споешь — ведь никто не захочет слушать, как ты пытаешься вытянуть Adele без голоса и слуха. Что ж, приготовься: петь ничего не придется. Зато надо вспомнить строчки из любимых и известных песен! В общем, постарайся на 100 баллов и сделай так, чтобы твои гости веселились и танцевали несколько часов напролет!</span>',
            typeBtn: 'arrow',
            style: {height: '56em', width: '93.8em'}
        },
        {
            idBg: 10,
            content: '<span>Первые гости уже прибыли — пришло время спеть что-нибудь на разогрев. Ты, как хозяин вечеринки, должен взять дело — то есть микрофон — в свои руки! Предлагаем начать с трека «Я волна» DJ Smash — хита 2008 года.</span>',
            typeBtn: 'next',
            style: {height: '42.6em', width: '91.8em'}
        },
        {
            idBg: 11,
            content: '<span><strong>DJ Smash — «Волна»</strong><br>Я волна, новая волна<br>Подо мной будет вся страна<br>Подожди, скоро навсегда</span>',
            typeBtn: 'variants',
            style: {height: '67.6em', width: '58.1em'},
            variants: {
                vertical: true,
                data: [
                    {title: 'Затоплю ваши города', ans: true},
                    {title: 'Уроню всех ваших котят', ans: false},
                    {title: 'Упаду раз и навсегда', ans: false},
                ],
                before: false
            }
        },
    ],
    [
        {
            idBg: 8,
            content: '<span>Лед тронулся, и люди стали пританцовывать. Еще бы — ведь JBL PartyBox-On-The-Go выдает звук профессионального уровня с мощными басами (все благодаря трем динамикам общей мощностью 100 Вт). Сможешь ли ты спеть на английском? Кумир молодежи Билли Айлиш поет довольно сложно и быстро, зато публика точно раскачается от знакомых мелодии и слов. Исполняем!</span>',
            typeBtn: 'next',
            style: {height: '59.3em', width: '94.5em'}
        },
        {
            idBg: 14,
            content: '<span><strong>Billie Eilish — Bad Guy</strong><br>So you’re a tough guy<br>Like it really rough guy<br>Just can’t get enough guy<br>Chest always so puffed guy<br>I’m that bad type<br>Make your mama sad type<br>Make your girlfriend mad tight<br>Might seduce your dad type<br>I’m the bad guy,<br></span>',
            typeBtn: 'variants',
            style: {height: '74.9em', width: '54.7em'},
            variants: {
                vertical: false,
                data: [
                    {title: 'ah', ans: false},
                    {title: 'duh', ans: true},
                    {title: 'shvah', ans: false},
                ],
                before: false
            }
        },
    ],
    [
        {
            idBg: 10,
            content: '<span>Наступает вечер, и гости просят медленный танец. Пройдемся по русской классике — спой «Выпускной» Басты (да так, чтобы все заплакали).</span>',
            typeBtn: 'next',
            style: {height: '42.6em', width: '91.8em'}
        },
        {
            idBg: 11,
            content: '<span><strong>Баста — «Выпускной»</strong><br>Медлячок, чтобы ты заплакала<br>И пусть звучат они все одинаково<br></span>',
            typeBtn: 'variants',
            style: {height: '67.8em', width: '69.3em'},
            variants: {
                vertical: true,
                data: [
                    {title: 'И для тебя все это не знаково', ans: false},
                    {title: 'И вовсе не новатор я', ans: false},
                    {title: 'И пусть банально и не талантливо', ans: true},
                ],
                before: 'Но как сумел, на гитаре сыграл и спел'
            }
        },
    ],
    [
        {
            idBg: 10,
            content: '<span>Песня спета с душой, хоть и не везде было стопроцентное попадание в ноты. Но пора начинать энергичный дэнсинг, и, кажется, Валера хочет, чтобы ты еще раз продемонстрировал свое пение на английском. ABBA — то, что надо!</span>',
            typeBtn: 'next',
            style: {height: '44.4em', width: '91.8em'}
        },
        {
            idBg: 19,
            content: '<span><strong>ABBA — Dancing Queen</strong><br>You are the dancing queen<br>Young and sweet<br>Only seventeen<br>Dancing queen<br>Feel the beat from the tambourine, oh yeah<br>You can dance<br>You can jive<br></span>',
            typeBtn: 'variants',
            style: {height: '81.1em', width: '58.3em'},
            variants: {
                vertical: true,
                data: [
                    {title: 'Having the time of your life', ans: true},
                    {title: 'Winning this fight of your life', ans: false},
                    {title: 'Dating with very strange guy', ans: false},
                ],
                before: false
            }
        },
    ],
    [
        {
            idBg: 10,
            content: '<span>Ты зовешь к микрофону двух друзей. Что может быть лучше, чем хором кричать It’s my li-i-ife?</span>',
            typeBtn: 'next',
            style: {height: '42.6em', width: '91.8em'}
        },
        {
            idBg: 11,
            content: '<span><strong>Bon Jovi — It’s my life</strong><br>It’s my life<br>It’s now or never<br></span>',
            typeBtn: 'variants',
            style: {height: '67.5em', width: '58.1em'},
            variants: {
                vertical: true,
                data: [
                    {title: 'But I don’t like rainy weather', ans: false},
                    {title: 'But I ain’t gonna live forever', ans: true},
                    {title: 'But I need to be more clever', ans: false},
                ],
                before: 'I just want to live while I’m alive'
            }
        },
    ],
    [
        {
            idBg: 10,
            content: '<span>Яркое световое шоу от JBL PartyBox On-The-Go добавило драйва и веселья происходящему (кстати, функционал устройства позволяет настраивать цвета и эффекты). После такой песни нужно повторить что-то мотивирующее. И всем знакомое!</span>',
            typeBtn: 'next',
            style: {height: '44.6em', width: '91.8em'}
        },
        {
            idBg: 14,
            content: '<span><strong>Ария — «Я свободен»</strong><br>Я бы мог с тобою быть<br>Я бы мог про все забыть<br>Я бы мог тебя любить<br>Но это лишь игра<br>В шуме ветра за спиной<br></span>',
            typeBtn: 'variants',
            style: {height: '74.7em', width: '57.3em'},
            variants: {
                vertical: true,
                data: [
                    {title: 'Я забуду позывной', ans: false},
                    {title: 'Я не жду любви иной', ans: false},
                    {title: 'Я забуду голос твой', ans: true},
                ],
                before: false
            }
        },
    ],
    [
        {
            idBg: 10,
            content: '<span>Песня о любви вызвала бурю эмоций. Окончательно распалить чувства гостей можно хитом, который цепляет даже крепких парней. Уверены: такую песню вы будете горланить все вместе — а поможет вам в этом дополнительный микрофон, который можно докупить к JBL PartyBox On-The-Go.</span>',
            typeBtn: 'next',
            style: {height: '48.7em', width: '91.8em'}
        },
        {
            idBg: 11,
            content: '<span><strong>МакSим — «Знаешь ли ты»</strong><br>Знаешь ли ты?<br>Вдоль ночных дорог шла<br>босиком не жалея ног<br>Сердце его теперь в твоих руках<br></span>',
            typeBtn: 'variants',
            style: {height: '72em', width: '65.4em'},
            variants: {
                vertical: true,
                data: [
                    {title: 'Не потеряй его и не сломай', ans: true},
                    {title: 'Не раскисай, смотри, и не рыдай', ans: false},
                    {title: 'Не потеряй его, он попугай', ans: false},
                ],
                before: false
            }
        },
    ],
];

export default overleyData;