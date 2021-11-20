import React from 'react';

function PostLoading(Component) {
    const PostLoadingComponent = ({ isLoading, ...props }) => {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				We are waiting for the data to load!...
			</p>
		);
	};
	return PostLoadingComponent;
}
export default PostLoading;