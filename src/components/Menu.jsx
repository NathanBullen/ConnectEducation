import React from 'react';
import './topics.jsx';

function Menu() {
    return (
      <div id="menu">
			<div id="home">
			  <i class="fa fa-home lefticon" aria-hidden="true"></i>Home
			</div>
			<div id="topics">
			  <i class="fa fa-list-ul lefticon" aria-hidden="true"></i>Topics<i class="fa fa-angle-right righticon" aria-hidden="true"></i>
			  <ul id="topics-sub">
				<li><a href="#">Chemistry</a></li>
				<li><a href="#">Biology</a></li>
				<li><a href="#">Physics</a></li>
				<li><a href="#">Psychology</a></li>
			  </ul>
			</div>
			<div id="selected-topic">
				Galvanic Chemistry
			</div>
			<div id="questions">
			  <i class="fa fa-pencil lefticon" aria-hidden="true"></i>Practice Quiz<i class="fa fa-angle-right righticon practiceicon" aria-hidden="true"></i>
			</div>
	  </div>
    );
}

export default Menu;
