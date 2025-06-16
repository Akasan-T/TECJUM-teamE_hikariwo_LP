document.addEventListener("DOMContentLoaded", function () {
    // ページ読み込み後 0.5秒でタイトルアニメーションを発火
    setTimeout(() => {
        const conceptTitle = document.querySelector(".concept_title");
        if (conceptTitle) {
            conceptTitle.classList.add("is-animated");
        }
    }, 500);

    const targets = document.querySelectorAll(".Features_top_img.fadeup, .bottom_img.fadeup, .bottom_illustration.fadeup");
    let isScrolling = false;

    function handleScroll() {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(() => {
                let allAnimated = true; // すべての画像に .is-animated が適用されたか判定

                targets.forEach(target => {
                    const rect = target.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    if (rect.top < windowHeight * 0.8) {
                        target.classList.add("is-animated"); // アニメーション適用
                    }

                    if (!target.classList.contains("is-animated")) {
                        allAnimated = false;
                    }
                });

                if (allAnimated) {
                    window.removeEventListener("scroll", handleScroll); // すべて適用済みならスクロールイベント削除
                }

                isScrolling = false;
            });
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初回チェック（すでに見えている場合）
});


const pagetop_btn = document.querySelector(".pagetop");
// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);
// ページ上部へスムーズに移動
function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}
// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 100) {
        pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
        pagetop_btn.style.opacity = "0";
    }
}
