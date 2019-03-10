# 府中農産物直売所検索アプリ
こちらの東京都府中市のオープンデータを使っています。
http://www.city.fuchu.tokyo.jp/kurashi/nogyonituite/tokusan/nousannbutsuchokubaijomap.html

こちらに公開されています https://fuchu-nosanbutsu.herokuapp.com/

* Ruby version : 2.6.1
* Rails version : > 6.0.0 beta2
* 開発環境のセットアップ

```
bundle install
rails c
> Store.import_csv('db/30chokubaijo_map.csv')
```

https://localhost:3000 にアクセスすると見られます！
![image.png](https://qiita-image-store.s3.amazonaws.com/0/124445/3d9bb315-f810-32ae-d301-a9cfb395e12d.png)
