'use strict';


/* Services */
app.factory('CreditList', ['$resource',
    function ($resource) {
        return $resource('rest/test.php/index', {}, {
            query: {method: 'GET'}
        })
    }
]);

app.factory('CreditInfo', ['$resource',
    function ($resource) {
        return $resource('rest/test.php/index', {}, {
            query: {method: 'GET'}
        })
    }
]);


//例子
/*app.factory('Leads', ['$resource',
    function($resource){
        return {
            default: $resource('rest/leads.php/index', {},  {
                query: { method: 'GET'}
            }),
            batchUpdate: $resource('rest/leads.php/batchUpdate', {},  {
                save: { method: 'POST'}
            }),
            batchCreate: $resource('rest/leads.php/batchCreate', {},  {
                save: { method: 'POST'}
            })
        }
    }
]);*/


