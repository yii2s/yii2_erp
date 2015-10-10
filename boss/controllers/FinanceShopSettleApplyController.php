<?php

namespace boss\controllers;

use Yii;
use common\models\FinanceShopSettleApply;
use boss\models\FinanceShopSettleApplySearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use boss\models\FinanceWorkerOrderIncomeSearch;
use boss\models\FinanceSettleApplySearch;

/**
 * FinanceShopSettleApplyController implements the CRUD actions for FinanceShopSettleApply model.
 */
class FinanceShopSettleApplyController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }

    /**
     * 门店结算列表
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new FinanceShopSettleApplySearch;
        $searchModel->finance_shop_settle_apply_starttime = strtotime('-1 week last monday');//统计结束时间,上周第一天
        $searchModel->finance_shop_settle_apply_endtime = strtotime('last sunday');//统计结束时间,上周最后一天
        $requestParams = Yii::$app->request->getQueryParams();
        $searchModel->load($requestParams);
        $searchModel->review_section = $requestParams['review_section'];
        if($searchModel->review_section == FinanceShopSettleApplySearch::BUSINESS_REVIEW){
            $searchModel->finance_shop_settle_apply_status = FinanceSettleApplySearch::FINANCE_SETTLE_APPLY_STATUS_INIT;
        }elseif($searchModel->review_section == FinanceShopSettleApplySearch::FINANCE_REVIEW){
            $searchModel->finance_shop_settle_apply_status = FinanceSettleApplySearch::FINANCE_SETTLE_APPLY_STATUS_BUSINESS_PASSED;
        }
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }
    
    /**
     * 记录审核结果
     * @param type $id
     * @return type
     */
    public function actionReview($id,$review_section,$is_ok){
        $model = $this->findModel($id);
        if($review_section== FinanceShopSettleApplySearch::BUSINESS_REVIEW){
            if($is_ok == 1){
                $model->finance_shop_settle_apply_status = FinanceSettleApplySearch::FINANCE_SETTLE_APPLY_STATUS_BUSINESS_PASSED;
            }else{
                $model->finance_shop_settle_apply_status = FinanceSettleApplySearch::FINANCE_SETTLE_APPLY_STATUS_BUSINESS_FAILED;
            }
        }elseif($review_section == FinanceShopSettleApplySearch::FINANCE_REVIEW){
            if($is_ok == 1){
                $model->finance_shop_settle_apply_status = FinanceSettleApplySearch::FINANCE_SETTLE_APPLY_STATUS_FINANCE_PASSED;
            }else{
                $model->finance_shop_settle_apply_status = FinanceSettleApplySearch::FINANCE_SETTLE_APPLY_STATUS_FINANCE_FAILED;
            }
        }
        $model->save();
        return $this->actionIndex();
    }
    
    /**
     * 门店人工结算信息
     * @return type
     */
    public function actionShopManualSettlementIndex()
    {
        $orderIncomeSearchModel = new FinanceWorkerOrderIncomeSearch;
        $orderIncomeDataProvider = $orderIncomeSearchModel->search(Yii::$app->request->getQueryParams());
        $searchModel = new FinanceShopSettleApplySearch;
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        return $this->render('shopManualSettlementIndex', [
            'dataProvider' => $dataProvider,
            'orderIncomeDataProvider' => $orderIncomeDataProvider,
            'model' => $searchModel,
        ]);
    }
    
    /**
     * 门店人工结算完成
     * @return type
     */
    public function actionShopManualSettlementDone()
    {
        return $this->actionIndex();
    }

    /**
     * Displays a single FinanceShopSettleApply model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
         $orderIncomeSearchModel = new FinanceWorkerOrderIncomeSearch;
        $orderIncomeDataProvider = $orderIncomeSearchModel->search(Yii::$app->request->getQueryParams());
        $searchModel = new FinanceShopSettleApplySearch;
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());
        return $this->render('view', [
            'dataProvider' => $dataProvider,
            'orderIncomeDataProvider' => $orderIncomeDataProvider,
            'model' => $searchModel,
        ]);
    }

    /**
     * Creates a new FinanceShopSettleApply model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new FinanceShopSettleApply;

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing FinanceShopSettleApply model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing FinanceShopSettleApply model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the FinanceShopSettleApply model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return FinanceShopSettleApply the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = FinanceShopSettleApply::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}