import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';

export default function ScrollBar(
    {children, className, style, options, ...props}: {
        options?: any;
        children: React.ReactNode;
        style?: React.CSSProperties;
        className?: string;
    }
) {
    return <OverlayScrollbarsComponent
        className={className}
        options={{
            scrollbars: {
                autoHide: "scroll",
            },
            ...options
        }}
        style={style}
        {...props}
    >
        {children}
    </OverlayScrollbarsComponent>
}