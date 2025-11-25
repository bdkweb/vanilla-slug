stringToSlug('#title', '#slug', {
    prefix: '',
    suffix: '.html',
    space: '-',
    AND: 'and',
    language: 'auto',
    callback: function(slug) {
        document.getElementById('slug-preview').textContent = slug;
    }
});

function testExample(text) {
    const titleInput = document.getElementById('title');
    titleInput.value = text;
    titleInput.dispatchEvent(new Event('input'));
}