# PLProtocol Polaris プロトコル仕様書

## 基本方針

PLProtocol(以下、PLProto)は２つのファイルからなる

1. Metaデータ
2. Layerデータ

また、フォルダー構成は以下のようになることが望ましい

- meta.json
- layer
  - 01.hoge.json
  - 02.fuga.json

### Metaデータ

メタデータは以下のプロパティを持つことができる

| propaty | type | |
| --- | --- | --- |
| projectCode | 文字列 | プロジェクトを表す一意の文字列であることが望ましい |
| projectName | 文字列 | プロジェクトを識別するための文字列 |
| projectDate | 日付 | 任意だが省略はできない |
| aud | 文字列 | プロジェクト作成者を表す文字列、同一プロジェクトでは一意である必要がある |
| col | リスト | 各レイヤーのヘッダーとして扱われる |

audはプロジェクトの作成者・管理者を表すものであり**projectCodeと合わせてすべてのレイヤーファイルで一致する必要がある**。
また、colで指定した列は**すべてのレイヤーに存在する必要がある**。
メタデータで指定されたcolの数と、レイヤーデータの列の数が一致しない場合は不正データとして処理する。

### Layerデータ

レイヤーデータは以下のプロパティを持つことができる

| propaty | type | |
| --- | --- | --- |
| projectCode | 文字列 | プロジェクトを表す一意の文字列であることが望ましい |
| layerName | 文字列 | ユーザーが識別するための文字列 |
| layerIndex | 数字 | レイヤーの重ね方を表すものであり欠番は許されない |
| layerNumber | 文字列 | ユーザーが識別するための文字列 |
| stt | 文字列 | プロトコルとしては使用されないが省略はできない |
| end | 文字列 | プロトコルとしては使用されないが省略はできない |
| aud | 文字列 | プロジェクト作成者 |
| iss | 文字列 | レイヤー作成者 |
| isc | 文字列 | レイヤー作成者識別子 |
| body | リスト | セクションのリスト |

#### Section

PLProtoでは同一の瞬間に行われる動作をセクションとしてまとめる
例えば、１つの任意の合図をトリガーとして行われる動作はすべて同一のセクションに属しているといえる。
セクションは「セル」の集合であるリスト形式であり、１セクションに含まれるセルの数はメタデータのcolによって、定義される。
また、セルは以下のプロパティを持つことができる。

| propaty | type | |
| --- | --- | --- |
| object | 文字列 | ABSOLUTE , RELATIVE, ACTIONのみをとる |
| color | 文字列 | 16進数カラーコード |
| pointer | 文字列 or 数値 | ACTIONの場合のみ文字列をとる |
| content | 文字列 | ユーザーが識別するための文字列 |

#### セルオブジェクトにおける「object」の考え方について

セルオブジェクトでは「object」をプロパティとして「ABSOLUTE」「RELATIVE」「ACTION」の値をとる、これ以外の値をとることは許されない

| | |
| --- | --- |
| ABSOLUTE | レイヤーの最初のセクションからの経過時間をpointerであらわす |
| RELATIVE | １つ前のセクション実行後からの経過時間をpointerであらわす |
| ACTION | セクションの実行条件をpointerにとる |

----

Polaris Protocol v1.0 author: sasanqua
