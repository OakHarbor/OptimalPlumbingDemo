const faqItems = Array.from(document.querySelectorAll("#faq-1741 .cs-faq-item"));

function setOpen(item, open) {
    const button = item.querySelector(".cs-button");
    item.classList.toggle("active", open);
    button.setAttribute("aria-expanded", open ? "true" : "false");
}

for (const item of faqItems) {
    const button = item.querySelector(".cs-button");
    button.addEventListener("click", () => {
        setOpen(item, !item.classList.contains("active"));
    });
}

function openFromHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const item = faqItems.find((faqItem) => faqItem.id === id);
    if (item) setOpen(item, true);
}

openFromHash();
window.addEventListener("hashchange", openFromHash);
