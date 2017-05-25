import React from 'react';
import moment from 'moment'
import {
  twitterHandle
} from '../resources/configs';

export default function(props) {
  let day = moment().format('dddd');

  return (
    <div className="footer">
      <p>this site is made by <a href={twitterHandle}>@tandysean</a>, happy {day} : )</p>
    </div>
  );
}
