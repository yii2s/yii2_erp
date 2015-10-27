<?php

namespace boss\controllers\order;

use Yii;
use boss\models\order\OrderComplaint;
use boss\components\BaseAuthController;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use boss\models\order\OrderComplaintSearch;

/**
 * OrderComplaintController implements the CRUD actions for OrderComplaint model.
 */
class OrderComplaintController extends BaseAuthController
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
     * Lists all OrderComplaint models.
     * @return mixed
     */
    public function actionIndex()
    {   
    	$searchModel = new OrderComplaintSearch();
    	$orderComplaint = new OrderComplaint();
    	$comStatus = $orderComplaint->ComplaintStatus();
    	$comLevel = $orderComplaint->ComplaintLevel();
    	$comType = $orderComplaint->ComplaintType();
    	$params = Yii::$app->request->getQueryParams();
    	$dataProvider = $searchModel->search($params);
    	//print_r($dataProvider->getData());exit();
    	$url = $_SERVER['HTTP_HOST'].$_SERVER['QUERY_STRING'];
    	return $this->render('index', [
    			'dataProvider' => $dataProvider,
    			'searchModel' => $searchModel,
    			'comStatus' => $comStatus,
    			'comLevel' => $comLevel,
    			'comType' => $comType,
    			'params' => $params,
    			'url' => $url
    	]);
        
    }
	public function actionAdd(){
	$model = new OrderComplaint();
    	$arr = array('OrderComplaint'=>array(
    			'order_id'=>'1234',
    			'worker_id'=>'123123',
    			'complaint_type'=>'1',
    			'complaint_phone'=>13800138000,
    			'complaint_section'=>'1',
    			'complaint_level'=>'2',
    			'complaint_content'=>'33241234231',
    			'complaint_time'=>'12332131'));
    	$model->load($arr);
    	$model->save();
    	//$result = $model->insertModel($arr);
    	exit();
    }

    /**
     * Displays a single OrderComplaint model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new OrderComplaint model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new OrderComplaint();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing OrderComplaint model.
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
     * Deletes an existing OrderComplaint model.
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
     * Finds the OrderComplaint model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return OrderComplaint the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = OrderComplaint::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
    public function actionApp(){
    	echo "你好";exit();
    }
}
