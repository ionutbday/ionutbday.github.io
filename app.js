angular.module('ib', [])
    .controller('mainCtrl', function($scope) {
        $scope.greeting = 'Happy birthday, Ionut!';
        $scope.greetingMessages = [
            'We all want to wish you the greatest day of your life. A day when you feel exactly as you make us feel every day.',
            'Thank you for being a great colleague, a great employee and, above all, the greatest friend.'
        ];

        $scope.messages = [
            {
                text: 'Roses are red. Violets are blue. Stop complaining, I am older than you!',
                author: 'Oany'
            },
            {
                text: 'Thank you for being the most awesome friend ever! :)',
                author: 'BoDorca'
            },
            {
                text: 'Great friend; keep up the good work',
                author: 'Bea'
            },
            {
                text: 'Wishing you the very best Moldovan birthday!',
                author: 'Miha'
            }
        ];
    });
