
- Khi đặt class này thì các thằng con trực tiếp sẽ được tính toán các giá trị css.
- lưu ý thằng con đầu tiên sẽ ko được apply : 

    + space-x-0 => --tw-space-x-reverse: 0;
                   margin-right: calc(0px * var(--tw-space-x-reverse));
                   margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
    + space-x-0.5 => --tw-space-x-reverse: 0;
                   margin-right: calc(0.125rem  * var(--tw-space-x-reverse));
                   margin-left: calc(0.125rem  * calc(1 - var(--tw-space-x-reverse)));
    + -space-x-0.5 => --tw-space-x-reverse: 0;
                   margin-right: calc(-0.125rem  * var(--tw-space-x-reverse));
                   margin-left: calc(-0.125rem  * calc(1 - var(--tw-space-x-reverse)));


    + space-y-reverse => --tw-space-y-reverse: 1;
    + space-x-reverse => --tw-space-x-reverse: 1;

