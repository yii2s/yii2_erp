<?php

namespace boss\controllers;

use Yii;
use core\models\shop\ShopManager;
use core\models\shop\ShopManagerSearch;
use boss\components\BaseAuthController;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use crazyfd\qiniu\Qiniu;
use yii\helpers\ArrayHelper;
use kartik\helpers\Html;
use yii\helpers\Json;
use yii\base\Widget;
use yii\web\UploadedFile;

/**
 * ShopManagerController implements the CRUD actions for ShopManager model.
 */
class ShopManagerController extends BaseAuthController
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
     * Lists all ShopManager models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new ShopManagerSearch;
        $searchModel->audit_status = 0;
        $dataProvider = $searchModel->search(Yii::$app->request->getQueryParams());

        return $this->render('index', [
            'dataProvider' => $dataProvider,
            'searchModel' => $searchModel,
        ]);
    }

    /**
     * Displays a single ShopManager model.
     * @param string $id
     * @return mixed
     */
    public function actionView($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
        return $this->redirect(['view', 'id' => $model->id]);
        } else {
        return $this->render('view', ['model' => $model]);
}
    }

    /**
     * Creates a new ShopManager model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new ShopManager;
        if (\Yii::$app->request->post()) {
        	
            $data = \Yii::$app->request->post();
            $model->load($data);
            $file = UploadedFile::getInstance($model, 'bl_photo_url');
            if($file){
                $qiniu = new Qiniu();
                $path = $qiniu->uploadFile($file->tempName);
                $model->bl_photo_url = $path['key'];
            }
            
            
            if($model->save()){
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing ShopManager model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if (\Yii::$app->request->post()) {
            $data = \Yii::$app->request->post();
            $model->load($data);
            $file = UploadedFile::getInstance($model, 'bl_photo_url');
            if($file){
                $qiniu = new Qiniu();
                $path = $qiniu->uploadFile($file->tempName);
                $model->bl_photo_url = $path['key'];
            }
            if($model->save()){
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing ShopManager model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->softDelete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the ShopManager model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $id
     * @return ShopManager the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = ShopManager::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
    /**
     * 通过名称获取列表
     */
    public function actionSearchByName($name='')
    {
        $models = ShopManager::find()
        ->select(['id', 'name'])
        ->andFilterWhere(['like', 'name', $name])
        ->limit(50)
        ->all();
        echo Json::encode(['results'=>$models]);
    }
    /**
     * 加入黑名单
     */
    public function actionJoinBlacklist($id)
    {
        $model = $this->findModel($id);
        if(\Yii::$app->request->isPost){
            $cause = Yii::$app->request->post('cause','');
            $model->joinBlacklist($cause);
            \Yii::$app->session->setFlash('default', '添加成功');
            return $this->redirect(['index']);
        }
        return $this->renderAjax('join_blacklist',[
            'model'=>$model
        ]);
        
    }
    /**
     * 解除黑名单
     */
    public function actionRemoveBlacklist($id)
    {
        $cause = Yii::$app->request->get('cause','');
        $this->findModel($id)->removeBlacklist($cause);
        \Yii::$app->session->setFlash('default', '取消成功');
        return $this->redirect(['index']);
    }
}