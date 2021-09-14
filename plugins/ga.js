if (process.client && process.env.NODE_ENV === 'production') {
  ;(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    ;(i[r] =
      i[r] ||
      function () {
        ;(i[r].q = i[r].q || []).push(arguments)
      }),
      (i[r].l = 1 * new Date())
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(
    window,
    document,
    'script',
    'https://www.googletagmanager.com/gtag/js?id=G-5LHZB7BHF0',
    'ga'
  )
  ga('create', 'G-5LHZB7BHF0', 'auto')
}
export default ({ app: { router }, store }) => {
  if (process.client && process.env.NODE_ENV === 'production') {
    router.afterEach((to, from) => {
      ga('set', 'page', to.fullPath)
      ga('send', 'pageview')
    })
  }
}