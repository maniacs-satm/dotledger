describe('DotLedger.Views.Transactions.Details', function () {
  var createModel, createView
  createModel = function (sorted_transaction) {
    if (sorted_transaction == null) {
      sorted_transaction = null
    }
    return new DotLedger.Models.Transaction({
      amount: '-10.00',
      memo: 'Some memo',
      name: 'Some name',
      payee: 'Some payee',
      ref_number: 'Some ref_number',
      type: 'Some type',
      fit_id: '1234567',
      posted_at: '2013-01-01',
      id: 1,
      sorted_transaction: sorted_transaction
    })
  }
  createView = function (model) {
    if (model == null) {
      model = createModel()
    }
    return new DotLedger.Views.Transactions.Details({
      model: model
    })
  }
  it('should be defined', function () {
    expect(DotLedger.Views.Transactions.Details).toBeDefined()
  })
  it('should use the correct template', function () {
    expect(DotLedger.Views.Transactions.Details).toUseTemplate('transactions/details')
  })
  it('can be rendered', function () {
    var view
    view = createView()
    expect(view.render).not.toThrow()
  })
  it('renders the amount', function () {
    var view
    view = createView().render()
    expect(view.$el).toContainText('-10.00')
  })
  it('renders the memo', function () {
    var view
    view = createView().render()
    expect(view.$el).toContainText('Some memo')
  })
  it('renders the payee', function () {
    var view
    view = createView().render()
    expect(view.$el).toContainText('Some payee')
  })
  it('renders the ref_number', function () {
    var view
    view = createView().render()
    expect(view.$el).toContainText('Some ref_number')
  })
  it('renders the type', function () {
    var view
    view = createView().render()
    expect(view.$el).toContainText('Some type')
  })
  it('renders the fit_id', function () {
    var view
    view = createView().render()
    expect(view.$el).toContainText('1234567')
  })
  it('renders the posted_at date', function () {
    var view
    view = createView().render()
    expect(view.$el).toContainText('1 Jan 2013')
  })
  return it('renders the sorted transaction details if the transaction is sorted', function () {
    var model, view
    model = createModel({
      category_name: 'Some Category',
      tag_list: ['tag1, tag2, tag3'],
      note: 'Some note.'
    })
    view = createView(model).render()
    expect(view.$el).toContainText('Some Category')
    expect(view.$el).toContainText('tag1, tag2, tag3')
    expect(view.$el).toContainText('Some note.')
  })
})
