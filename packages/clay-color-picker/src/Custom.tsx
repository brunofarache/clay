/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import GradientSelector from './GradientSelector';
import Hue from './Hue';
import Icon from '@clayui/icon';
import React, {useEffect, useRef, useState} from 'react';
import Splotch from './Splotch';
import tinycolor from 'tinycolor2';
import {useHexInput} from './hooks';

interface IRGBInputProps {
	/**
	 * Callback function for when the input value is changed
	 */
	onChange: (val: {r?: number; g?: number; b?: number}) => void;

	/**
	 * The name of the input. R, G, or B.
	 */
	name: string;

	/**
	 * The value of the input.
	 */
	value: number;
}

/**
 * Renders input that displays RGB values
 */
const RGBInput: React.FunctionComponent<IRGBInputProps> = ({
	name,
	onChange,
	value,
}) => {
	const inputRef = useRef(null);
	const [inputValue, setInputValue] = useState(value);

	useEffect(() => {
		if (document.activeElement !== inputRef.current) {
			setInputValue(value);
		}
	}, [value]);

	return (
		<div className="form-group">
			<div className="input-group">
				<div className="input-group-item">
					<input
						className="form-control input-group-inset input-group-inset-before"
						data-testid={`${name}Input`}
						onChange={event => {
							const newVal = Number(event.target.value);

							setInputValue(newVal);

							onChange({[name]: newVal});
						}}
						ref={inputRef}
						type="text"
						value={inputValue}
					/>
					<label className="input-group-inset-item input-group-inset-item-before">
						{name.toUpperCase()}
					</label>
				</div>
			</div>
		</div>
	);
};

interface IProps {
	/**
	 * List of hex's that will display as a color splotch
	 */
	colors: string[];

	/**
	 * Label describing the set of colors provided
	 */
	label?: string;

	/**
	 * Callback for when a color is changed
	 */
	onChange: (val: string) => void;

	/**
	 * Callback for when the list of colors is changed
	 */
	onColorsChange: (val: string[]) => void;

	/**
	 * Path of the location of the icon spritemap
	 */
	spritemap: string;
}

/**
 * Renders the custom color picker
 */
const ClayColorPickerCustom: React.FunctionComponent<IProps> = ({
	colors,
	label,
	onChange,
	onColorsChange,
	spritemap,
}) => {
	const inputRef = useRef(null);
	const [activeSplotchIndex, setActiveSplotchIndex] = useState(0);
	const [editorActive, setEditorActive] = useState(false);

	const color = tinycolor(colors[activeSplotchIndex]);

	const [hue, setHue] = useState(color.toHsv().h);
	const [hexInputVal, setHexInput] = useHexInput(color.toHex());

	const {b, g, r} = color.toRgb();
	const {s, v} = color.toHsv();

	const rgbArr: [number, string][] = [[r, 'r'], [g, 'g'], [b, 'b']];

	const setNewColor = (colorValue: tinycolor.Instance, setInput = true) => {
		const hexString = colorValue.toHex();

		const newColors = [...colors];

		newColors[activeSplotchIndex] = hexString;

		onColorsChange(newColors);

		onChange(hexString);

		if (setInput) {
			setHexInput(colorValue.toHex());
		}
	};

	useEffect(() => {
		if (inputRef.current !== document.activeElement) {
			setHexInput(color.toHex());
		}
	}, [color]);

	return (
		<React.Fragment>
			{label && (
				<div className="clay-color-header">
					<span className="component-title">{label}</span>

					<button
						className={`${
							editorActive ? 'close' : ''
						} component-action`}
						onClick={() => setEditorActive(!editorActive)}
						type="button"
					>
						<Icon
							spritemap={spritemap}
							symbol={editorActive ? 'times' : 'drop'}
						/>
					</button>
				</div>
			)}

			<div className="clay-color-swatch">
				{colors.map((hex, i) => (
					<div className="clay-color-swatch-item" key={i}>
						<Splotch
							active={i === activeSplotchIndex}
							onClick={() => {
								if (hex === 'FFFFFF') {
									setEditorActive(true);
								}

								setActiveSplotchIndex(i);

								setHue(tinycolor(hex).toHsv().h);

								onChange(hex);
							}}
							value={hex}
						/>
					</div>
				))}
			</div>

			{editorActive && (
				<React.Fragment>
					<div className="clay-color-map-group">
						<GradientSelector
							color={color}
							hue={hue}
							onChange={(saturation, visibility) => {
								setNewColor(
									tinycolor({
										h: hue,
										s: saturation,
										v: visibility,
									})
								);
							}}
						/>

						<div className="clay-color-map-values">
							{rgbArr.map(([val, key]) => (
								<RGBInput
									key={key}
									name={key}
									onChange={newVal => {
										const newColor = tinycolor({
											b,
											g,
											r,
											...newVal,
										});

										setHue(newColor.toHsv().h);
										setNewColor(newColor);
									}}
									value={val}
								/>
							))}
						</div>
					</div>

					<Hue
						onChange={hue => {
							setHue(hue);

							setNewColor(tinycolor({h: hue, s, v}));
						}}
						value={hue}
					/>

					<div className="clay-color-footer">
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-item">
									<input
										className="form-control input-group-inset input-group-inset-before"
										data-testid="customHexInput"
										onBlur={event => {
											const newColor = tinycolor(
												event.target.value
											);

											if (newColor.isValid()) {
												setHexInput(newColor.toHex());
											} else {
												setHexInput(color.toHex());
											}
										}}
										onChange={event => {
											const newHexValue =
												event.target.value;

											setHexInput(newHexValue);

											const newColor = tinycolor(
												newHexValue
											);

											if (newColor.isValid()) {
												setHue(newColor.toHsv().h);
												setNewColor(newColor, false);
											}
										}}
										ref={inputRef}
										type="text"
										value={hexInputVal
											.toUpperCase()
											.substring(0, 6)}
									/>

									<label className="input-group-inset-item input-group-inset-item-before">
										{'#'}
									</label>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default ClayColorPickerCustom;
