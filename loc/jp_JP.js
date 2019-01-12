module.exports = {
  _: {
    storage_is_encrypted: 'ストレージが暗号化されています。復号にはパスワードが必要です。',
    enter_password: 'パスワードを入力',
    bad_password: 'パスワードが間違っています。',
    never: 'データなし',
    continue: '続行',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'ウォレット選択',
    options: 'オプション',
    createBitcoinWallet:
      'Bitcoin ウォレットを持っていません。Lightning ウォレットへ課金する場合は Bitcoin ウォレットを新規作成するかインポートする必要があります。続行しますか?',
    list: {
      app_name: 'Blue Wallet',
      title: 'ウォレット',
      header: 'ウォレットは秘密鍵(プライベートキー)とウォレットアドレスのペアで構成されています。' + 'コインを受信するために共有できます。',
      add: 'ウォレットの追加',
      create_a_wallet: 'ウォレットの作成',
      create_a_wallet1: 'ウォレット作成は無料で',
      create_a_wallet2: '好きなだけ複数作成できます',
      latest_transaction: '最新の取引',
      empty_txs1: 'ここに取引が表示されます',
      empty_txs2: '現在は何もありません',
      tap_here_to_buy: 'Bitcoin を購入するにはここをタップ',
    },
    reorder: {
      title: 'ウォレットの並び替え',
    },
    add: {
      title: 'ウォレットの追加',
      description:
        'ペーパーウォレット(WIF 形式- Wallet Import Format)をスキャンするかウォレットを新規作成できます。既定で Segwit ウォレットが作成されます。',
      scan: 'スキャン',
      create: '作成',
      label_new_segwit: '新規 SegWit',
      label_new_lightning: '新規 Lightning',
      wallet_name: 'ウォレット名',
      wallet_type: 'タイプ',
      or: '又は',
      import_wallet: 'ウォレットをインポート',
      imported: 'インポート完了',
      coming_soon: '準備中',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'ウォレット',
      address: 'アドレス',
      type: 'タイプ',
      label: 'ラベル',
      destination: '送り先',
      description: '内容',
      are_you_sure: '実行しますか?',
      yes_delete: 'はい、削除します',
      no_cancel: 'いいえ、中止します',
      delete: '削除',
      save: '保存',
      delete_this_wallet: 'このウォレットの削除',
      export_backup: 'エクスポート / バックアップ',
      buy_bitcoin: 'Bitcoin の購入',
      show_xpub: 'ウォレット XPUB の表示',
    },
    export: {
      title: 'ウォレットのエクスポート',
    },
    xpub: {
      title: 'ウォレット XPUB',
      copiedToClipboard: 'クリップボードにコピーしました。',
    },
    import: {
      title: 'インポート',
      explanation:
        'ここにニモニック、秘密鍵(プライベートキー）、WIFなどを入力してください。BlueWallet が正しい形式を推測しウォレットをインポートします。',
      imported: 'インポート完了',
      error: 'インポートに失敗しました。入力したデータが有効か確認してください。',
      success: '成功',
      do_import: 'インポート',
      scan_qr: '代わりに QR コードをスキャンしますか?',
    },
    scanQrWif: {
      go_back: '戻る',
      cancel: '中止',
      decoding: '解読中',
      input_password: 'パスワードの入力',
      password_explain: 'これは BIP38 暗号化秘密鍵です',
      bad_password: 'パスワードが違います',
      wallet_already_exists: '同じウォレットが既に存在します',
      bad_wif: 'WIF 形式が間違っています',
      imported_wif: 'WIF インポート完了 ',
      with_address: ' アドレス ',
      imported_segwit: 'SegWit インポート完了',
      imported_legacy: 'Legacy インポート完了',
      imported_watchonly: '閲覧専用 インポート完了',
    },
  },
  transactions: {
    list: {
      tabBarLabel: '取引',
      title: '取引',
      description: 'ウォレットの送金または入金のリスト',
      conf: '確認',
    },
    details: {
      title: '取引',
      from: '送り主',
      to: '送り先',
      copy: 'コピー',
      transaction_details: '取引詳細',
      show_in_block_explorer: 'Block Explorer で表示',
    },
  },
  send: {
    header: '送金',
    details: {
      title: '取引の作成',
      amount_field_is_not_valid: '金額欄が正しくありません',
      fee_field_is_not_valid: '手数料欄が正しくありません',
      address_field_is_not_valid: 'アドレス欄が正しくありません',
      total_exceeds_balance: '送金額が利用可能残額を超えています。',
      create_tx_error: '取引作成中にエラーが発生しました。有効な送金アドレスか確認してください。',
      address: 'アドレス',
      amount_placeholder: '送金額 (BTC)',
      fee_placeholder: '取引手数料 (BTC)',
      note_placeholder: 'ラベル',
      cancel: '中止',
      scan: 'スキャン',
      send: '送金',
      create: '作成',
      remaining_balance: '残高',
    },
    confirm: {
      header: '確認',
      sendNow: '送金実行',
    },
    success: {
      done: '完了',
    },
    create: {
      details: '詳細',
      title: '取引の作成',
      error: '取引作成でエラーが発生しました。アドレスまたは送金額を確認してください。',
      go_back: '戻る',
      this_is_hex: '署名されネットワークへ送信される 16 進数取引コードです',
      to: '送金先',
      amount: '送金額',
      fee: '手数料',
      tx_size: 'TX サイズ',
      satoshi_per_byte: 'Satoshi/byte',
      memo: 'メモ',
      broadcast: '送信',
      not_enough_fee: '手数料不足です。増額してください',
    },
  },
  receive: {
    header: '入金',
    details: {
      title: 'このアドレスを支払者と共有',
      share: '共有',
      copiedToClipboard: 'クリップボードにコピーしました。',
      label: '概要',
      create: 'Create',
      setAmount: '入金額',
    },
  },
  buyBitcoin: {
    header: 'Bitcoin の購入',
    tap_your_address: 'タップしてアドレスをクリップボードにコピー:',
    copied: 'クリップボードにコピーしました!',
  },
  settings: {
    header: '設定',
    plausible_deniability: '隠匿設定...',
    storage_not_encrypted: 'ストレージ: 暗号化されていません',
    storage_encrypted: 'ストレージ: 暗号化されています',
    password: 'パスワード',
    password_explain: 'ストレージの復号に使用するパスワードを作成',
    retype_password: 'パスワードの再入力',
    passwords_do_not_match: 'パスワードが一致しません',
    encrypt_storage: 'ストレージの暗号化',
    lightning_settings: 'Lightning 設定',
    lightning_settings_explain:
      '他の LND ノードへ接続するには LndHub をインストール後、' +
      'URL を入力してください。既定の設定を使用するには空欄にします' +
      'ndHub\n (lndhub.io)',
    save: '保存',
    about: 'BlueWallet について',
    language: '言語',
    currency: '通貨',
  },
  plausibledeniability: {
    title: '隠匿設定',
    help:
      'このウォレットの復号に必要なパスワードを第三者に強要される場合、' +
      'コインを安全に保護するために BlueWallet はメインとは異なるパスワードで' +
      '暗号化されたダミーのストレージを作成します。' +
      '第三者へこのパスワードを提供することで、第三者が BlueWallet のダミーの' +
      '暗号化ストレージを復号することで、メインのストレージを隠匿することが可能となり' +
      'コインは安全に保護されます。',
    help2: 'この新規ダミーのストレージは完全に機能します。少額のコインを保管することで' + 'ダミーと疑われないようにすることが可能です。',
    create_fake_storage: 'ダミーの暗号化ストレージの作成',
    go_back: '戻る',
    create_password: 'パスワードの作成',
    create_password_explanation: 'ダミーの暗号化ストレージのパスワードはメインのストレージのパスワードと異なる必要があります。',
    password_should_not_match: 'ダミーのストレージのパスワードはメインのストレージのパスワードと異なる必要があります。',
    retype_password: 'パスワードの再入力',
    passwords_do_not_match: 'パスワードが一致しません',
    success: '成功',
  },
  lnd: {
    title: '資金の管理',
    choose_source_wallet: '送金元ウォレットを選択',
    refill_lnd_balance: 'Lightning ウォレットへ送金',
    refill: '送金',
    withdraw: '引き出し',
    expired: '失効',
    sameWalletAsInvoiceError: '以前作成したウォレットと同じウォレットへの支払いはできません。',
  },
};