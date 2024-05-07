'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export function Metrics() {
    const [toggle, setToggle] = useState<boolean>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setToggle(true)
        }, 4000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            {toggle && (
                <>
                    <Script
                        id="fb-pixel"
                        strategy="lazyOnload"
                        async
                        dangerouslySetInnerHTML={{
                            __html: `!function(e,t,n,a,c,o,s){e.fbq||(c=e.fbq=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},e._fbq||(e._fbq=c),c.push=c,c.loaded=!0,c.version="2.0",c.queue=[],(o=t.createElement(n)).async=!0,o.src=a,(s=t.getElementsByTagName(n)[0]).parentNode.insertBefore(o,s))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","3037222063187157"),fbq("track","PageView");`,
                        }}
                    />

                    {/* <GoogleAnalytics gaId="GTM-NLSM3WR" /> */}

                    <Script
                        id="gtm"
                        type="text/javascript"
                        async
                        dangerouslySetInnerHTML={{
                            __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"GTM-NLSM3WR")`,
                        }}
                    />

                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=<GTM ID>`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                </>
            )}
        </>
    )
}
