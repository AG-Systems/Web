angular.module('Twitter', ['ngResource']);

function TwitterCrtl($scope, $resource)
{
  $resource('http://search.twitter.com')
}
