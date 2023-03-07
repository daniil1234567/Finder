import * as React from "react"

const SvgComponent = (props) => (
    <svg
        width={17}
        height={17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <path fill="url(#a)" d="M.5.5h16v16H.5z" />
        <defs>
            <pattern
                id="a"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#b" transform="scale(.00667)" />
            </pattern>
            <image
                id="b"
                width={150}
                height={150}
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
)

export default SvgComponent
