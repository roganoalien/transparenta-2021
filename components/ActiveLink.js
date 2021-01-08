import React, { Children } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ActiveLink = ({ children, activeClassName, ...props }) => {
	const { asPath } = useRouter();
	const child = React.Children.only(children);
	const childClassName = child.props.className || '';

	const className =
		asPath === props.href || asPath === props.as
			? `${childClassName} ${activeClassName}`.trim()
			: childClassName;

	return (
		<Link {...props}>
			{React.cloneElement(child, {
				className: className || null
			})}
		</Link>
	);
};

ActiveLink.propTypes = {
	activeClassName: PropTypes.string.isRequired
};

export default ActiveLink;
