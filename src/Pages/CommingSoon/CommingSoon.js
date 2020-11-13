import React, { useEffect } from "react";

export default () => {
	useEffect(() => {
		// Hide sidenav.
		window.$('#sidenav-overlay').click()
	})

	return <div >
		<div style={{ minHeight: "80vh" }} className="d-flex align-items-center justify-content-center">
			<div className="display-4 text-center">Comming Soon</div>
		</div>
	</div>
}