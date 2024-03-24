import { useState, useEffect } from 'react';
import styles from './Square.module.css';
const DELTA = 5;
const MAX_WIDTH = document.getElementsByTagName('html')[0].clientWidth - 50;
const MAX_HEIGHT = document.getElementsByTagName('html')[0].clientHeight - 50;

export const Square = () => {
	const [position, setPosition] = useState({
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	});
	console.log('Координаты', position);

	const handleButtonPress = (e) => {
		console.log(e);
		if (e.key === 'ArrowLeft') {
			setPosition((prev) => {
				return {
					...prev,
					left: prev.left - DELTA,
				};
			});
		}
		if (e.key === 'ArrowUp') {
			setPosition((prev) => {
				return {
					...prev,
					top: prev.top - DELTA,
				};
			});
		}
		if (e.key === 'ArrowRight') {
			setPosition((prev) => {
				if (prev.left + DELTA <= MAX_WIDTH) {
					return {
						...prev,
						left: prev.left + DELTA,
					};
				}
				return {
					...prev,
					left: MAX_WIDTH,
				};
			});
		}
		if (e.key === 'ArrowDown') {
			setPosition((prev) => {
				if (prev.top + DELTA <= MAX_HEIGHT) {
					return {
						...prev,
						top: prev.top + DELTA,
					};
				}
				return {
					...prev,
					top: MAX_HEIGHT,
				};
			});
		}
	};
	useEffect(() => {
		document.addEventListener('keydown', handleButtonPress);
		return () => {
			document.removeEventListener('keydown', handleButtonPress);
		};
	}, []);

	return (
		<>
			<div className={styles['green']} style={position}></div>
		</>
	);
};
