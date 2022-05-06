'use strict';

const item = document.querySelectorAll('.item');
console.log('item', item);
const propsLists = document.querySelectorAll('.props__list');
console.log('propsLists', propsLists);
const propsItems = document.querySelectorAll('.props__item');
console.log('propsItems', propsItems);
const title = document.querySelectorAll('.item__title');
console.log('title', title);

const text = document.createTextNode('This и прототипы объектов')

item[0].before(item[1]);
item[0].before(item[4]);
item[4].after(item[3]);
item[5].after(item[2]);

propsLists[4].before(propsLists[2]);
propsLists[3].before(propsLists[4]);
propsLists[5].after(propsLists[3]);
title[1].after(propsLists[5]);


propsItems[2].append(propsItems[14]);
propsLists[2].append(propsItems[43]);
propsLists[2].append(propsItems[44]);

item[2].style.backgroundColor = "#973b3b";
item[5].style.backgroundColor = "#466ba7";
item[4].style.backgroundColor = "#46a75e";

title[2].innerHTML = "This и прототипы объектов";