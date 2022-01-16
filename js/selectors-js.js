// element
let element = document.querySelectorAll(`[data-tippy-root]`)[0]

// tagName
let tagName = el.tagName.toLowerCase()

// classList
let classList = el.classList.value.replace(/ /g, '.')
classList = classList === `` ? `` : `.${classList}`
classList = classList.replace(/\.cssscan-current/g, ``)

// closest
let closest = el.closest(`.cssscan-capture`)

