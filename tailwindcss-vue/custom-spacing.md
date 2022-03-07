
    + // tailwind.config.js
    + module.exports = {
    +   theme: {
    +     spacing: {
    +       '1': '8px',
    +       '2': '12px',
    +       '3': '16px',
    +       '4': '24px',
    +       '5': '32px',
    +       '6': '48px',
    +     }
    +   }
    + }


- spacing sẽ được các thuộc tính sau kế thừa : padding, margin, width, height, maxHeight, gap, inset, space, translate.

- Extend :

    + module.exports = {
    +   theme: {
    +     extend: {
    +       spacing: {
    +         '13': '3.25rem',
    +         '15': '3.75rem',
    +         '128': '32rem',
    +         '144': '36rem',
    +       }
    +     }
    +   }
    + }

- sẽ tạo ra cấc class sau : p-13, m-15, h-128