import React from 'react';
import PropTypes from 'prop-types';
import getSmileFace from '../../services/getSmileFace';
import moment from 'moment';

import './styles.scss';

const MoodRegister = ({ moodItem }) => {
	return (
		<div className="mood-item">
			<p className="mood-item__message">{moodItem.message}</p>
			<img
				className="mood-item__image"
				src={getSmileFace(moodItem.mood)}
				alt={moodItem.mood}
			/>
			<p className="mood-item__date">
				{moment(moodItem.dateValue).format('MMMM Do YYYY')}
			</p>
		</div>
	);
};

MoodRegister.propTypes = {
	moodItem: PropTypes.object
};

export default MoodRegister;
