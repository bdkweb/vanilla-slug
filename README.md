# 🌍 String to Slug Converter

A lightweight, multi-language JavaScript library for converting strings to SEO-friendly slugs. Perfect for generating URL slugs from titles in multiple languages.

## ✨ Features

- 🌍 **Multi-language support** (Vietnamese, French, German, Spanish, English, and more)
- 🔍 **Auto-language detection** from input text
- ⚡ **Zero dependencies** - pure JavaScript
- 🎯 **SEO-friendly** slug generation
- 🔧 **Highly configurable** (prefix, suffix, separators, custom replacements)
- 📱 **Responsive** and mobile-friendly



## 🎯 Live Demo

Experience Vanilla Slug in action with our interactive demo:

[**🚀 Try Live Demo**](https://dkhuong.com/tool/seo-slug-generator.html)

### 🎮 Features Demonstrated:
- Real-time slug generation
- Multi-language support
- Auto language detection  
- Custom prefix/suffix
- SEO-friendly URL preview
- Responsive design

### 📸 Demo Preview
![Vanilla Slug Demo](https://via.placeholder.com/800x400/667eea/ffffff?text=Vanilla+Slug+Live+Demo+Preview)
*Interactive demo showing real-time slug conversion*

## 🚀 Quick Start

### Installation

Include the script in your HTML:

```html
<script src="path/to/string-to-slug.min.js"></script>
```

## Basic Usage
```js
// Initialize slug generator
stringToSlug('#title-input', '#slug-output', {
    suffix: '.html',
    AND: 'and'
});
```

## Advanced Usage
```js
// With custom configuration
stringToSlug('#title', '#slug', {
    language: 'vi', // Force Vietnamese
    prefix: 'bai-viet-',
    suffix: '.hmm',
    space: '-',
    AND: 'va',
    callback: function(slug) {
        console.log('Generated slug:', slug);
    }
});
```

## Standalone Conversion
```js
// Convert text directly
const slug = _stringToSlug_API("Café & Restaurant", {
    language: 'fr',
    suffix: '.html'
});
// Returns: "cafe-and-restaurant.html"
```

## 📚 Examples
| Input | Language | Output |
|-------|----------|---------|
| "Hello World & Welcome!" | English | hello-world-and-welcome |
| "Cộng hòa Việt Nam" | Vietnamese | cong-hoa-viet-nam |
| "Déjà vu Café" | French | deja-vu-cafe |
| "Für Mäuse & Käse" | German | fuer-maeuse-and-kaese |
| "Canción española" | Spanish | cancion-espanola |

## ⚙️ Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| language | string | 'auto' | Language mode ('auto', 'vi', 'fr', 'de', 'es', 'en') |
| prefix | string | '' | Text to prepend to slug |
| suffix | string | '' | Text to append to slug |
| space | string | '-' | Character to replace spaces |
| AND | string | 'and' | Replacement for & character |
| callback | function | null | Callback function after slug generation |

## 🛠️ Development
### Build
```
npm run build
```

### Test
```
npm test
```

## 🌐 Browser Support
Chrome 60+  
Firefox 55+  
Safari 12+  
Edge 79+

## 📄 License
MIT License © 2024 BDKweb

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📮 Support
For issues and questions, please create an issue on GitHub.

Made with ❤️ by BDKweb
