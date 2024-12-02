// ----- Вкладки выбора шаблона
function openTab(tab){
    tab.classList.remove('disactive')
    tab.classList.add('active')
}
function closeTab(tabs){
    tabs.forEach(tab => {
        tab.classList.remove('active')
        tab.classList.add('disactive')
    })
}
blog = document.querySelector('.init_blog')
blog_view = document.querySelector('.init_content_view_blog')
anketa = document.querySelector('.init_anketa')
anketa_view = document.querySelector('.init_content_view_anketa')
portfolio = document.querySelector('.blog_portfolio')
portfolio_view = document.querySelector('.init_content_view_portfolio')
multilink = document.querySelector('.blog_multilink')
multilink_view = document.querySelector('.init_content_view_multilink')

blog.addEventListener('click', () => {
    openTab(blog_view)
    closeTab([anketa_view, portfolio_view, multilink_view])
    blog.classList.add('selected_grey')
    anketa.classList.remove('selected_grey')
    portfolio.classList.remove('selected_grey')
    multilink.classList.remove('selected_grey')
})
anketa.addEventListener('click', () => {
    openTab(anketa_view)
    closeTab([blog_view, portfolio_view, multilink_view])
    anketa.classList.add('selected_grey')
    blog.classList.remove('selected_grey')
    portfolio.classList.remove('selected_grey')
    multilink.classList.remove('selected_grey')
})
portfolio.addEventListener('click', () => {
    openTab(portfolio_view)
    closeTab([anketa_view, blog_view, multilink_view])
    portfolio.classList.add('selected_grey')
    anketa.classList.remove('selected_grey')
    blog.classList.remove('selected_grey')
    multilink.classList.remove('selected_grey')
})
multilink.addEventListener('click', () => {
    openTab(multilink_view)
    closeTab([anketa_view, portfolio_view, blog_view])
    multilink.classList.add('selected_grey')
    anketa.classList.remove('selected_grey')
    portfolio.classList.remove('selected_grey')
    blog.classList.remove('selected_grey')
})