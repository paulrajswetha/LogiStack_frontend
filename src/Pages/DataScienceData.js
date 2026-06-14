export const dataScienceQuestions = [
  // BASIC LEVEL (1-25)
  {
    id: 1,
    level: "basic",
    topic: "Role & Basics",
    question: "What is the role of a data scientist in an organisation?",
    answer: "A data scientist is responsible for collecting, analysing, and interpreting complex data to help organisations make informed decisions. Their key responsibilities include:\n\n• Data collection and cleaning\n• Exploratory data analysis\n• Building predictive models\n• Communicating insights to stakeholders\n• Identifying business opportunities through data\n• Deploying models to production\n• Monitoring model performance over time",
    tags: ["role", "data scientist", "responsibilities"]
  },
  {
    id: 2,
    level: "basic",
    topic: "Machine Learning",
    question: "Explain the difference between supervised and unsupervised learning.",
    answer: "Supervised Learning:\n• Uses labelled data for training\n• Has input features and known output labels\n• Used for classification and regression\n• Examples: Linear regression, Decision trees, SVM\n\nUnsupervised Learning:\n• Works with unlabeled data\n• Finds hidden patterns or relationships\n• Used for clustering and association\n• Examples: K-Means, PCA, Association rules\n\nKey Difference: Supervised learning predicts known outcomes; unsupervised learning discovers unknown patterns.",
    tags: ["supervised", "unsupervised", "machine learning"]
  },
  {
    id: 3,
    level: "basic",
    topic: "Model Evaluation",
    question: "What is cross-validation, and why is it important?",
    answer: "Cross-validation is a technique to assess how well a model generalises to an independent dataset.\n\nCommon types:\n• K-Fold CV: Split data into k folds, train on k-1, validate on 1\n• Stratified K-Fold: Maintains class distribution\n• Leave-One-Out: Each sample becomes validation set\n\nImportance:\n• Prevents overfitting\n• Provides more reliable performance estimates\n• Uses data efficiently\n• Helps with hyperparameter tuning",
    tags: ["cross-validation", "overfitting", "model evaluation"]
  },
  {
    id: 4,
    level: "basic",
    topic: "Data Preprocessing",
    question: "Can you explain the steps involved in the data preprocessing process?",
    answer: "Data preprocessing steps include:\n\n1. Data Cleaning:\n   • Handling missing values\n   • Removing duplicates\n   • Correcting inconsistencies\n\n2. Data Transformation:\n   • Scaling (Min-Max, Standardization)\n   • Normalization\n   • Log transformations\n\n3. Data Integration:\n   • Combining multiple data sources\n   • Resolving conflicts\n\n4. Feature Engineering:\n   • Creating new features\n   • Encoding categorical variables\n   • Feature selection",
    tags: ["preprocessing", "data cleaning", "feature engineering"]
  },
  {
    id: 5,
    level: "basic",
    topic: "Machine Learning",
    question: "What are some common algorithms used in machine learning?",
    answer: "Common ML algorithms:\n\nRegression:\n• Linear Regression\n• Ridge/Lasso Regression\n\nClassification:\n• Logistic Regression\n• Decision Trees\n• Random Forest\n• Support Vector Machines (SVM)\n• Naive Bayes\n• K-Nearest Neighbors (KNN)\n\nClustering:\n• K-Means\n• DBSCAN\n• Hierarchical Clustering\n\nNeural Networks:\n• Feed-forward Networks\n• CNNs (for images)\n• RNNs/LSTMs (for sequences)\n\nEnsemble Methods:\n• Gradient Boosting (XGBoost, LightGBM)\n• Bagging and Boosting",
    tags: ["algorithms", "ML", "regression", "classification"]
  },
  {
    id: 6,
    level: "basic",
    topic: "Data Preprocessing",
    question: "How do you handle missing data in a dataset?",
    answer: "Methods to handle missing data:\n\n1. Deletion Methods:\n   • Listwise deletion (remove rows with missing)\n   • Pairwise deletion\n   • Drop columns with high missing %\n\n2. Imputation Methods:\n   • Mean/Median/Mode imputation\n   • Forward/Backward fill (time series)\n   • K-Nearest Neighbors imputation\n   • Regression imputation\n   • Multiple imputation\n\n3. Advanced Methods:\n   • Using ML models to predict missing values\n   • Deep learning-based imputation\n\nConsiderations:\n• Understand why data is missing (MCAR, MAR, MNAR)\n• Impact on model performance",
    tags: ["missing data", "imputation", "data cleaning"]
  },
  {
    id: 7,
    level: "basic",
    topic: "Clustering",
    question: "What is the purpose of the K-Means clustering algorithm?",
    answer: "K-Means algorithm partitions a dataset into K distinct, non-overlapping clusters.\n\nHow it works:\n1. Choose K (number of clusters)\n2. Initialize K centroids randomly\n3. Assign each point to nearest centroid\n4. Update centroids to cluster means\n5. Repeat steps 3-4 until convergence\n\nPurpose:\n• Customer segmentation\n• Image compression\n• Anomaly detection\n• Document clustering\n\nGoal: Minimize within-cluster sum of squares (WCSS).",
    tags: ["kmeans", "clustering", "unsupervised"]
  },
  {
    id: 8,
    level: "basic",
    topic: "Model Evaluation",
    question: "How do you assess the performance of a machine learning model?",
    answer: "Model performance metrics:\n\nClassification Metrics:\n• Accuracy: (TP+TN)/(TP+TN+FP+FN)\n• Precision: TP/(TP+FP)\n• Recall (Sensitivity): TP/(TP+FN)\n• F1 Score: Harmonic mean of precision & recall\n• ROC-AUC: Area under ROC curve\n• Confusion Matrix\n\nRegression Metrics:\n• Mean Squared Error (MSE)\n• Root Mean Squared Error (RMSE)\n• Mean Absolute Error (MAE)\n• R-squared (R²)\n• Adjusted R-squared\n\nAdditional:\n• Cross-validation scores\n• Learning curves\n• Feature importance",
    tags: ["evaluation", "metrics", "accuracy", "precision", "recall"]
  },
  {
    id: 9,
    level: "basic",
    topic: "Machine Learning",
    question: "Explain the term 'bias' in the context of machine learning models.",
    answer: "Bias refers to error from approximating a real-world problem with a simplified model.\n\nCharacteristics of High Bias (Underfitting):\n• Model is too simple\n• Poor performance on training data\n• Poor performance on test data\n• Assumptions are too strong\n\nExamples:\n• Linear model for non-linear data\n• Not capturing important patterns\n\nTrade-off:\n• High bias: Underfitting\n• Low bias: Complex model (risk of overfitting)\n• Goal: Balance bias and variance",
    tags: ["bias", "underfitting", "bias-variance tradeoff"]
  },
  {
    id: 10,
    level: "basic",
    topic: "Feature Engineering",
    question: "What is the importance of feature scaling in machine learning?",
    answer: "Feature scaling ensures features are on a similar scale.\n\nCommon scaling methods:\n• Standardization: (x - μ)/σ → mean=0, std=1\n• Min-Max Scaling: (x - min)/(max - min) → range [0,1]\n• Robust Scaling: Uses median and IQR\n\nWhy it's important:\n• Prevents features with larger scales from dominating\n• Helps algorithms converge faster (gradient descent)\n• Required for distance-based algorithms (KNN, SVM, K-Means)\n• Improves model interpretability\n\nWhen it's critical:\n• Neural networks\n• SVM\n• KNN\n• PCA",
    tags: ["feature scaling", "normalization", "standardization"]
  },
  {
    id: 11,
    level: "basic",
    topic: "Regularization",
    question: "What is regularization in machine learning?",
    answer: "Regularization is a technique to prevent overfitting by adding a penalty term to the loss function.\n\nTypes:\n• L1 Regularization (Lasso): Adds |coefficients| penalty → feature selection\n• L2 Regularization (Ridge): Adds coefficients² penalty → weight shrinkage\n• Elastic Net: Combines L1 and L2\n\nBenefits:\n• Reduces model complexity\n• Improves generalization\n• Handles multicollinearity\n• Prevents overfitting\n\nHyperparameters:\n• λ (lambda): Controls regularization strength",
    tags: ["regularization", "overfitting", "l1", "l2"]
  },
  {
    id: 12,
    level: "basic",
    topic: "Regularization",
    question: "What is the difference between L1 and L2 regularization?",
    answer: "L1 Regularization (Lasso):\n• Adds absolute value of coefficients as penalty\n• Can shrink coefficients to zero\n• Performs feature selection\n• Creates sparse models\n• Loss = MSE + λ∑|w|\n\nL2 Regularization (Ridge):\n• Adds square of coefficients as penalty\n• Shrinks coefficients but not to zero\n• Distributes weight among correlated features\n• Loss = MSE + λ∑w²\n\nKey Differences:\n• L1 produces sparser solutions\n• L2 is more stable with correlated features\n• L1 for feature selection; L2 for handling multicollinearity\n• Elastic Net combines both",
    tags: ["l1", "l2", "regularization", "lasso", "ridge"]
  },
  {
    id: 13,
    level: "basic",
    topic: "Classification",
    question: "What is the purpose of a confusion matrix in classification tasks?",
    answer: "A confusion matrix visualizes classification model performance.\n\nStructure:\n              Predicted\n              Positive  Negative\nActual Positive   TP       FN\nActual Negative   FP       TN\n\nWhere:\n• TP (True Positive): Correctly predicted positive\n• TN (True Negative): Correctly predicted negative\n• FP (False Positive): Type I error\n• FN (False Negative): Type II error\n\nMetrics derived:\n• Accuracy = (TP+TN)/(TP+TN+FP+FN)\n• Precision = TP/(TP+FP)\n• Recall = TP/(TP+FN)\n• F1 Score = 2×(P×R)/(P+R)",
    tags: ["confusion matrix", "classification", "metrics"]
  },
  {
    id: 14,
    level: "basic",
    topic: "Feature Engineering",
    question: "How do you handle multicollinearity in a dataset?",
    answer: "Multicollinearity occurs when features are highly correlated.\n\nDetection methods:\n• Correlation matrix\n• Variance Inflation Factor (VIF) > 5 or 10\n\nHandling techniques:\n1. Remove one of correlated features\n2. Principal Component Analysis (PCA)\n3. Regularization (L1 or L2)\n4. Combine correlated features (average, sum)\n5. Use tree-based models (less affected)\n\nWhy address it:\n• Increases coefficient variance\n• Makes interpretation difficult\n• Can cause instability in linear models",
    tags: ["multicollinearity", "correlation", "feature selection"]
  },
  {
    id: 15,
    level: "basic",
    topic: "Classification",
    question: "Can you explain the difference between precision and recall?",
    answer: "Precision and Recall are classification metrics:\n\nPrecision:\n• Ratio of correctly predicted positives to total predicted positives\n• Formula: TP/(TP+FP)\n• Answers: 'Of all predicted positives, how many were correct?'\n• Important when false positives are costly (e.g., spam detection)\n\nRecall (Sensitivity):\n• Ratio of correctly predicted positives to total actual positives\n• Formula: TP/(TP+FN)\n• Answers: 'Of all actual positives, how many did we catch?'\n• Important when false negatives are costly (e.g., cancer detection)\n\nTrade-off:\n• Increasing one often decreases the other\n• F1 Score balances both",
    tags: ["precision", "recall", "metrics", "classification"]
  },
  {
    id: 16,
    level: "basic",
    topic: "Classification",
    question: "What is the purpose of the Naive Bayes algorithm in machine learning?",
    answer: "Naive Bayes is a probabilistic classifier based on Bayes' theorem.\n\nKey assumptions:\n• Features are independent given the class (naive assumption)\n\nHow it works:\nP(Class|Features) = P(Features|Class) × P(Class) / P(Features)\n\nTypes:\n• Gaussian NB (continuous features)\n• Multinomial NB (discrete counts)\n• Bernoulli NB (binary features)\n\nAdvantages:\n• Fast and efficient\n• Works well with high-dimensional data\n• Requires less training data\n\nApplications:\n• Spam filtering\n• Text classification\n• Sentiment analysis\n• Document categorization",
    tags: ["naive bayes", "classification", "probability"]
  },
  {
    id: 17,
    level: "basic",
    topic: "Data Preprocessing",
    question: "How do you handle outliers in a dataset?",
    answer: "Methods to handle outliers:\n\n1. Detection Methods:\n   • Z-score (|z| > 3)\n   • IQR (values < Q1-1.5IQR or > Q3+1.5IQR)\n   • Visualization (box plots, scatter plots)\n   • DBSCAN clustering\n\n2. Handling Methods:\n   • Removal: If due to data entry errors\n   • Capping/Winsorization: Replace with threshold values\n   • Transformation: Log, square root, Box-Cox\n   • Imputation: Replace with mean/median\n   • Keep: If they represent valid extreme cases\n\nConsiderations:\n• Domain knowledge matters\n• Impact on model performance\n• Distribution of data",
    tags: ["outliers", "data cleaning", "anomaly detection"]
  },
  {
    id: 18,
    level: "basic",
    topic: "Statistics",
    question: "Explain the concept of the Central Limit Theorem.",
    answer: "Central Limit Theorem (CLT) states:\n\nAs sample size increases (n → ∞), the sampling distribution of sample means approaches a normal distribution, regardless of the population's shape.\n\nKey properties:\n• Mean of sampling distribution = population mean\n• Standard error = σ/√n\n• Holds for n ≥ 30 (rule of thumb)\n\nImplications:\n• Enables hypothesis testing\n• Allows confidence intervals\n• Foundation for many statistical methods\n• Justifies using normal distribution for inference\n\nExample:\nEven if population is skewed, the distribution of sample means becomes approximately normal with sufficiently large sample size.",
    tags: ["statistics", "central limit theorem", "sampling"]
  },
  {
    id: 19,
    level: "basic",
    topic: "Machine Learning",
    question: "What is the purpose of a decision tree algorithm in machine learning?",
    answer: "Decision trees are used for both classification and regression tasks.\n\nHow it works:\n• Splits data based on features\n• Creates tree structure: root node → internal nodes → leaf nodes\n• Each leaf node contains a prediction\n\nSplitting criteria:\n• Classification: Gini impurity, Information gain\n• Regression: MSE, MAE\n\nAdvantages:\n• Easy to interpret and visualize\n• Handles both numerical and categorical data\n• No feature scaling required\n\nDisadvantages:\n• Prone to overfitting\n• Unstable (small changes can create different trees)",
    tags: ["decision tree", "classification", "regression"]
  },
  {
    id: 20,
    level: "basic",
    topic: "Ensemble Learning",
    question: "Can you explain the concept of ensemble learning?",
    answer: "Ensemble learning combines multiple models to improve performance.\n\nMain types:\n\n1. Bagging (Bootstrap Aggregating):\n   • Train models in parallel\n   • Each model sees random subset of data\n   • Example: Random Forest\n   • Reduces variance\n\n2. Boosting:\n   • Train models sequentially\n   • Each model corrects previous errors\n   • Examples: AdaBoost, XGBoost, LightGBM\n   • Reduces bias\n\n3. Stacking:\n   • Combines different model types\n   • Uses meta-learner for final prediction\n\nBenefits:\n• Better generalization\n• Reduced overfitting\n• Handles complex patterns",
    tags: ["ensemble", "bagging", "boosting", "stacking"]
  },
  {
    id: 21,
    level: "basic",
    topic: "Ensemble Learning",
    question: "What is the difference between bagging and boosting?",
    answer: "Bagging vs Boosting:\n\nBagging:\n• Parallel training\n• Each model trained on bootstrap sample\n• Models are independent\n• Combines by averaging/voting\n• Goal: Reduce variance\n• Example: Random Forest\n\nBoosting:\n• Sequential training\n• Each model focuses on previous errors\n• Models are dependent\n• Weighted combination\n• Goal: Reduce bias\n• Examples: AdaBoost, XGBoost, Gradient Boosting\n\nComparison:\n• Bagging: Underfitting-prone models become better\n• Boosting: Weak learners become strong\n• Bagging is less prone to overfitting",
    tags: ["bagging", "boosting", "ensemble"]
  },
  {
    id: 22,
    level: "basic",
    topic: "Ensemble Learning",
    question: "Explain the purpose of the Random Forest algorithm in machine learning.",
    answer: "Random Forest is an ensemble method that constructs multiple decision trees.\n\nKey features:\n• Uses bagging (bootstrap sampling)\n• Random feature selection at each split\n• Combines predictions via majority vote (classification) or average (regression)\n\nAdvantages:\n• Reduces overfitting compared to single trees\n• Handles high-dimensional data well\n• Provides feature importance\n• Robust to outliers\n• No need for feature scaling\n\nParameters to tune:\n• n_estimators (number of trees)\n• max_depth\n• min_samples_split\n• max_features\n\nApplications:\n• Classification and regression\n• Feature selection\n• Anomaly detection",
    tags: ["random forest", "ensemble", "bagging"]
  },
  {
    id: 23,
    level: "basic",
    topic: "Clustering",
    question: "How do you select the optimal number of clusters in a K-Means clustering algorithm?",
    answer: "Methods to find optimal K:\n\n1. Elbow Method:\n   • Plot WCSS vs K\n   • Look for 'elbow' point where decrease slows\n   • Subjective but common\n\n2. Silhouette Score:\n   • Measures how similar points are to their own cluster vs others\n   • Range: -1 to 1 (higher is better)\n   • More objective than elbow method\n\n3. Gap Statistic:\n   • Compares within-cluster dispersion to null reference\n   • More computationally intensive\n\n4. Domain Knowledge:\n   • Business constraints\n   • Expected number of natural groupings\n\n5. Stability Analysis:\n   • How consistent are clusters across runs?",
    tags: ["kmeans", "clustering", "elbow method", "silhouette"]
  },
  {
    id: 24,
    level: "basic",
    topic: "Machine Learning",
    question: "What is the purpose of the Support Vector Machine (SVM) algorithm?",
    answer: "SVM is a supervised learning algorithm for classification and regression.\n\nClassification SVM:\n• Finds hyperplane that best separates classes\n• Maximizes margin between classes\n• Uses support vectors (points closest to hyperplane)\n\nKernel Trick:\n• Maps data to higher dimensions\n• Enables non-linear separation\n• Common kernels: linear, polynomial, RBF, sigmoid\n\nAdvantages:\n• Effective in high-dimensional spaces\n• Memory efficient\n• Works well with clear margin separation\n\nApplications:\n• Image classification\n• Text categorization\n• Handwriting recognition",
    tags: ["svm", "classification", "kernel"]
  },
  {
    id: 25,
    level: "basic",
    topic: "Big Data",
    question: "How do you handle a large volume of data that cannot fit into memory?",
    answer: "Strategies for big data:\n\n1. Sampling:\n   • Random sampling\n   • Stratified sampling\n   • Important: Ensure representative sample\n\n2. Distributed Computing:\n   • Apache Spark (in-memory processing)\n   • Hadoop (MapReduce)\n   • Dask (Python parallel computing)\n\n3. Data Streaming:\n   • Process in chunks\n   • Online learning algorithms\n\n4. Data Compression:\n   • Efficient storage formats (Parquet, ORC)\n   • Columnar storage\n   • Compression algorithms\n\n5. Cloud Solutions:\n   • Cloud databases\n   • Auto-scaling resources\n\n6. Algorithm Selection:\n   • Use algorithms that handle large data well (SGD, online learning)",
    tags: ["big data", "spark", "hadoop", "scalability"]
  },
  
  // INTERMEDIATE LEVEL (26-60)
  {
    id: 26,
    level: "intermediate",
    topic: "Recommendation Systems",
    question: "Can you explain the purpose of a recommendation system?",
    answer: "Recommendation systems predict items users may be interested in.\n\nTypes:\n\n1. Content-Based Filtering:\n   • Recommends items similar to user's past preferences\n   • Uses item features\n   • No cold start for new items\n\n2. Collaborative Filtering:\n   • User-based: Similar users like similar items\n   • Item-based: Items often liked together\n   • Matrix factorization (SVD, ALS)\n\n3. Hybrid Systems:\n   • Combines multiple approaches\n   • Better accuracy\n\nApplications:\n• E-commerce (Amazon)\n• Streaming (Netflix, Spotify)\n• Social media (Facebook, LinkedIn)\n\nEvaluation:\n• Precision@k, Recall@k\n• Mean Average Precision (MAP)\n• Normalized Discounted Cumulative Gain (NDCG)",
    tags: ["recommendation systems", "collaborative filtering", "content-based"]
  },
  {
    id: 27,
    level: "intermediate",
    topic: "Dimensionality Reduction",
    question: "What is the purpose of Principal Component Analysis (PCA) in machine learning?",
    answer: "PCA is a dimensionality reduction technique.\n\nHow it works:\n1. Standardize the data\n2. Compute covariance matrix\n3. Calculate eigenvectors and eigenvalues\n4. Select top k principal components\n5. Project data onto new space\n\nKey properties:\n• Creates uncorrelated features\n• Preserves maximum variance\n• Components are orthogonal\n\nApplications:\n• Data visualization (2D/3D projection)\n• Noise reduction\n• Feature extraction\n• Speeding up algorithms\n\nLimitations:\n• Assumes linear relationships\n• Components are hard to interpret\n• Sensitive to scaling",
    tags: ["pca", "dimensionality reduction", "feature extraction"]
  },
  {
    id: 28,
    level: "intermediate",
    topic: "Imbalanced Data",
    question: "How do you handle a situation where the data is too imbalanced?",
    answer: "Methods for handling imbalanced data:\n\n1. Data-level Methods:\n   • Oversampling: SMOTE, ADASYN\n   • Undersampling: Random, Tomek links\n   • Combined methods: SMOTE + ENN\n\n2. Algorithm-level Methods:\n   • Class weights: Higher weight for minority class\n   • Cost-sensitive learning\n   • Ensemble methods: Balanced Random Forest, EasyEnsemble\n\n3. Evaluation Metrics:\n   • Use precision, recall, F1 (not accuracy)\n   • ROC-AUC, PR-AUC\n   • Confusion matrix\n\n4. Advanced Techniques:\n   • Anomaly detection for extreme imbalance\n   • One-class classification\n   • Data synthesis with GANs",
    tags: ["imbalanced data", "smote", "oversampling", "undersampling"]
  },
  {
    id: 29,
    level: "intermediate",
    topic: "Deep Learning",
    question: "What is the purpose of a Recurrent Neural Network (RNN) in deep learning?",
    answer: "RNNs are designed for sequential data, allowing information to persist over time.\n\nKey features:\n• Hidden state that captures information from previous steps\n• Same weights applied at each time step\n• Can handle variable-length sequences\n\nApplications:\n• Natural Language Processing\n• Time series forecasting\n• Speech recognition\n• Machine translation\n\nChallenges:\n• Vanishing/exploding gradients\n• Difficulty capturing long-term dependencies\n\nSolutions:\n• LSTM (Long Short-Term Memory)\n• GRU (Gated Recurrent Unit)\n• Gradient clipping",
    tags: ["rnn", "deep learning", "sequential data"]
  },
  {
    id: 30,
    level: "intermediate",
    topic: "Deep Learning",
    question: "Explain the concept of a Long Short-Term Memory (LSTM) network.",
    answer: "LSTM is a specialized RNN that addresses the vanishing gradient problem.\n\nKey Components:\n\n1. Forget Gate: Decides what information to discard\n2. Input Gate: Decides what new information to store\n3. Cell State: Carries information through the sequence\n4. Output Gate: Decides what to output\n\nAdvantages:\n• Captures long-term dependencies\n• More stable training\n• Better performance on sequences\n\nApplications:\n• Text generation\n• Sentiment analysis\n• Stock price prediction\n• Music generation\n\nCompared to RNN:\n• More parameters\n• More computationally intensive\n• Better at remembering long patterns",
    tags: ["lstm", "rnn", "deep learning", "sequential"]
  },
  {
    id: 31,
    level: "intermediate",
    topic: "NLP",
    question: "What is the purpose of the Word2Vec algorithm in natural language processing?",
    answer: "Word2Vec learns word embeddings by representing words as vectors in continuous space.\n\nArchitectures:\n\n1. CBOW (Continuous Bag of Words):\n   • Predicts target word from context\n   • Faster, better for frequent words\n\n2. Skip-gram:\n   • Predicts context from target word\n   • Better for rare words\n\nProperties:\n• Captures semantic relationships\n• Similar words have similar vectors\n• Vector arithmetic: king - man + woman = queen\n\nApplications:\n• Document classification\n• Machine translation\n• Information retrieval\n• Recommendation systems\n\nAlternatives: GloVe, FastText, BERT embeddings",
    tags: ["word2vec", "nlp", "embeddings"]
  },
  {
    id: 32,
    level: "intermediate",
    topic: "Feature Engineering",
    question: "How do you handle a situation where there are too many features compared to the number of observations?",
    answer: "Strategies for high-dimensional low-sample data:\n\n1. Feature Selection:\n   • Filter methods: Correlation, chi-square, mutual information\n   • Wrapper methods: RFE, forward/backward selection\n   • Embedded methods: Lasso (L1 regularization), tree importance\n\n2. Dimensionality Reduction:\n   • PCA\n   • t-SNE\n   • Autoencoders\n\n3. Regularization:\n   • L1 (Lasso) for feature selection\n   • L2 (Ridge) for coefficient shrinkage\n   • Elastic Net\n\n4. Algorithm Selection:\n   • Use algorithms designed for high dimensions\n   • Linear SVM, Naive Bayes, Random Forest\n   • Avoid kNN (distance-based) without reduction\n\n5. Cross-validation:\n   • Essential for avoiding overfitting",
    tags: ["high-dimensional", "feature selection", "dimensionality reduction"]
  },
  {
    id: 33,
    level: "intermediate",
    topic: "SVM",
    question: "Explain the concept of a support vector in the context of a Support Vector Machine algorithm.",
    answer: "Support vectors are data points that lie closest to the decision boundary (hyperplane) between classes.\n\nKey characteristics:\n• Determine the position and orientation of the hyperplane\n• Only support vectors influence the model\n• Non-support vectors can be removed without affecting the model\n\nProperties:\n• Sparse representation: only support vectors are stored\n• Robust to outliers when soft margin is used\n• Number of support vectors affects model complexity\n\nIn kernel SVM:\n• Support vectors in transformed space\n• Still define the decision boundary\n\nImportance:\n• Makes SVM memory efficient\n• Enables working in high-dimensional spaces",
    tags: ["svm", "support vectors", "hyperplane"]
  },
  {
    id: 34,
    level: "intermediate",
    topic: "Regression",
    question: "What is the purpose of the Root Mean Square Error (RMSE) metric in regression tasks?",
    answer: "RMSE measures the average magnitude of prediction errors.\n\nFormula:\nRMSE = √(1/n ∑(yᵢ - ŷᵢ)²)\n\nProperties:\n• Same units as target variable\n• Penalizes large errors more heavily (squared term)\n• Lower is better\n\nComparison with MAE:\n• RMSE > MAE when errors are large\n• RMSE more sensitive to outliers\n• MAE more robust\n\nWhen to use:\n• When large errors are particularly undesirable\n• For model comparison\n• When errors are normally distributed\n\nLimitations:\n• Difficult to interpret in isolation\n• Not normalized by scale",
    tags: ["rmse", "regression", "evaluation metrics"]
  },
  {
    id: 35,
    level: "intermediate",
    topic: "Association Rules",
    question: "Can you explain the purpose of the Apriori algorithm in association rule mining?",
    answer: "Apriori algorithm discovers frequent itemsets in transactional databases.\n\nKey concepts:\n• Support: Frequency of itemset in transactions\n• Confidence: Conditional probability of consequent given antecedent\n• Lift: Measures association strength beyond chance\n\nHow it works:\n1. Find frequent 1-itemsets\n2. Generate candidate k-itemsets from frequent (k-1)-itemsets\n3. Prune using minimum support threshold\n4. Repeat until no frequent itemsets found\n\nApplications:\n• Market basket analysis\n• Cross-selling recommendations\n• Medical diagnosis\n\nLimitations:\n• Computationally expensive\n• Many rules generated\n• May find spurious associations",
    tags: ["apriori", "association rules", "market basket analysis"]
  },
  {
    id: 36,
    level: "intermediate",
    topic: "Data Transformation",
    question: "How do you handle a situation where the data is highly skewed?",
    answer: "Methods for handling skewed data:\n\n1. Transformations:\n   • Log transformation: log(x)\n   • Square root: √x\n   • Cube root: ∛x\n   • Box-Cox: (x^λ - 1)/λ\n   • Yeo-Johnson (handles negative values)\n\n2. Power Transformations:\n   • For right-skewed: log, sqrt, reciprocal\n   • For left-skewed: square, cube, exponential\n\n3. Binning/Discretization:\n   • Equal width bins\n   • Equal frequency bins\n\n4. Statistical Methods:\n   • Use robust statistics (median, IQR)\n   • Non-parametric tests\n   • Models robust to skewness (tree-based)\n\nImpact:\n• Improves model performance\n• Satisfies normality assumptions\n• Reduces outlier influence",
    tags: ["skewness", "transformation", "box-cox", "log transformation"]
  },
  {
    id: 37,
    level: "intermediate",
    topic: "Information Retrieval",
    question: "What is the purpose of the Mean Average Precision (MAP) metric in evaluating information retrieval systems?",
    answer: "MAP measures the quality of ranked retrieval results.\n\nAverage Precision (AP):\n• Average of precision at each relevant document\n• AP = (1/|R|) × Σ precision@k for relevant positions\n\nMean Average Precision (MAP):\n• Mean of AP across multiple queries\n• MAP = (1/Q) × Σ AP(q)\n\nProperties:\n• Considers ranking order\n• Rewards placing relevant results higher\n• Handles multiple relevant documents\n\nWhen to use:\n• Search engines\n• Recommendation systems\n• Document retrieval\n\nComparison:\n• Recall-oriented: Normalized Discounted Cumulative Gain (NDCG)\n• Precision-oriented: MAP",
    tags: ["map", "information retrieval", "precision", "ranking"]
  },
  {
    id: 38,
    level: "intermediate",
    topic: "Clustering",
    question: "Explain the purpose of the Euclidean distance metric in clustering tasks.",
    answer: "Euclidean distance measures straight-line distance between points in multidimensional space.\n\nFormula:\nd(p,q) = √Σ(p_i - q_i)²\n\nProperties:\n• Intuitive interpretation\n• Sensitive to scale (requires feature scaling)\n• Favors spherical clusters\n• Affected by outliers\n\nApplications in clustering:\n• K-Means\n• Hierarchical clustering\n• k-Nearest Neighbors\n\nAlternatives:\n• Manhattan distance: ∑|p_i - q_i| (L1 norm)\n• Minkowski distance: (∑|p_i - q_i|^p)^(1/p)\n• Cosine similarity: For high-dimensional text data\n• Mahalanobis distance: Accounts for correlations",
    tags: ["euclidean distance", "clustering", "distance metrics"]
  },
  {
    id: 39,
    level: "intermediate",
    topic: "SVM",
    question: "How do you handle a situation where the data is not linearly separable?",
    answer: "Methods for non-linearly separable data:\n\n1. Kernel Trick:\n   • Maps data to higher-dimensional space\n   • Common kernels: polynomial, RBF, sigmoid\n   • Makes linear separation possible\n   • Used in SVM, Kernel PCA\n\n2. Feature Engineering:\n   • Create polynomial features\n   • Interaction terms\n   • Domain-specific transformations\n\n3. Neural Networks:\n   • Automatically learn non-linear relationships\n   • Multiple layers capture complex patterns\n\n4. Tree-based Models:\n   • Naturally handle non-linear relationships\n   • No linearity assumptions\n\n5. Local Linear Models:\n   • KNN (local neighborhoods)\n   • Locally Weighted Regression",
    tags: ["kernel trick", "svm", "non-linear", "rbf"]
  },
  {
    id: 40,
    level: "intermediate",
    topic: "Feature Selection",
    question: "What is the purpose of the Chi-square test in feature selection?",
    answer: "Chi-square test determines independence between categorical variables.\n\nFormula:\nχ² = Σ[(O - E)² / E]\nWhere O = observed frequency, E = expected frequency\n\nUsage in feature selection:\n• Measures association between feature and target\n• Higher χ² = more dependency\n• Select top k features with highest χ²\n\nAssumptions:\n• Categorical variables\n• Expected frequency ≥ 5 for each cell\n• Independent observations\n\nAdvantages:\n• Fast computation\n• Handles multiple categories\n• Interpretable results\n\nLimitations:\n• Only for categorical data\n• Doesn't capture non-linear relationships",
    tags: ["chi-square", "feature selection", "statistics"]
  },
  {
    id: 41,
    level: "intermediate",
    topic: "Optimization",
    question: "Can you explain the purpose of the Gradient Descent algorithm in machine learning?",
    answer: "Gradient Descent is an optimization algorithm that minimizes the cost function by iteratively updating parameters in the direction of steepest descent.\n\nTypes:\n\n1. Batch Gradient Descent:\n   • Uses entire dataset\n   • Computationally expensive\n   • Stable convergence\n\n2. Stochastic Gradient Descent (SGD):\n   • Uses one sample per iteration\n   • Fast, noisy updates\n   • Escapes local minima\n\n3. Mini-batch Gradient Descent:\n   • Balance between batch and SGD\n   • Most commonly used\n\nKey components:\n• Learning rate: Step size\n• Gradient: Direction of steepest ascent\n• Convergence criteria\n\nVariants:\n• Momentum\n• Adam\n• RMSprop\n• AdaGrad",
    tags: ["gradient descent", "optimization", "learning rate"]
  },
  {
    id: 42,
    level: "intermediate",
    topic: "Time Series",
    question: "How do you handle a situation where the data is time-series data?",
    answer: "Time series analysis techniques:\n\n1. Statistical Methods:\n   • ARIMA (AutoRegressive Integrated Moving Average)\n   • SARIMA (Seasonal ARIMA)\n   • Exponential Smoothing (Holt-Winters)\n   • Prophet (Facebook)\n\n2. Feature Engineering:\n   • Lag features\n   • Rolling statistics (mean, std, etc.)\n   • Time-based features (hour, day, month, etc.)\n   • Differencing for stationarity\n\n3. Machine Learning:\n   • XGBoost/LightGBM with time features\n   • LSTM/GRU networks\n   • CNN for time series\n\n4. Validation:\n   • Time series split (not random CV)\n   • Walk-forward validation\n\n5. Preprocessing:\n   • Handle missing values\n   • Detect and handle seasonality\n   • Check stationarity (ADF test)\n   • Remove trends",
    tags: ["time series", "arima", "forecasting", "lstm"]
  },
  {
    id: 43,
    level: "intermediate",
    topic: "KNN",
    question: "What is the purpose of the K-Nearest Neighbors (KNN) algorithm in machine learning?",
    answer: "KNN is a non-parametric algorithm used for classification and regression.\n\nHow it works:\n1. Choose k (number of neighbors)\n2. Calculate distances to all points\n3. Select k nearest neighbors\n4. Predict: majority vote (classification) or average (regression)\n\nKey considerations:\n• Choose k (small k = overfitting, large k = underfitting)\n• Feature scaling is essential\n• Distance metric selection\n\nAdvantages:\n• Simple and intuitive\n• No training phase\n• Works well with non-linear boundaries\n\nDisadvantages:\n• Computationally expensive at prediction\n• Sensitive to irrelevant features\n• Curse of dimensionality\n\nApplications:\n• Recommendation systems\n• Anomaly detection\n• Pattern recognition",
    tags: ["knn", "classification", "distance-based"]
  },
  {
    id: 44,
    level: "intermediate",
    topic: "Classification",
    question: "Explain the purpose of the Log Loss metric in evaluating classification models.",
    answer: "Log Loss (Cross-Entropy Loss) measures classification model performance for probabilistic predictions.\n\nFormula:\nLog Loss = -1/n × Σ[y·log(p) + (1-y)·log(1-p)]\n\nProperties:\n• Penalizes confident wrong predictions heavily\n• Range: 0 to ∞ (lower is better)\n• Perfect prediction = 0\n\nAdvantages:\n• Rewards well-calibrated probabilities\n• Sensitive to prediction confidence\n• Good for probabilistic classifiers\n\nWhen to use:\n• Binary and multi-class classification\n• Models that output probabilities\n• Neural networks (common loss function)\n\nLimitations:\n• Not interpretable in isolation\n• Requires probabilistic outputs",
    tags: ["log loss", "classification", "probability", "cross-entropy"]
  },
  {
    id: 45,
    level: "intermediate",
    topic: "Dimensionality Reduction",
    question: "How do you handle a situation where the data is high-dimensional?",
    answer: "Strategies for high-dimensional data:\n\n1. Dimensionality Reduction:\n   • PCA (linear)\n   • t-SNE (non-linear, visualization)\n   • UMAP (scalable, preserves topology)\n   • Autoencoders (neural networks)\n\n2. Feature Selection:\n   • Filter: Variance threshold, correlation\n   • Wrapper: RFE, forward selection\n   • Embedded: Lasso, tree importance\n\n3. Regularization:\n   • L1 for feature selection\n   • L2 for coefficient shrinkage\n\n4. Algorithm Selection:\n   • Use algorithms robust to high dimensions\n   • Linear models with regularization\n   • Tree-based models\n   • Avoid kNN, kernel methods\n\n5. Manifold Learning:\n   • ISOMAP\n   • Locally Linear Embedding (LLE)",
    tags: ["high-dimensional", "dimensionality reduction", "pca", "tsne"]
  },
  {
    id: 46,
    level: "intermediate",
    topic: "Regression",
    question: "What is the purpose of the R-squared (R²) metric in evaluating regression models?",
    answer: "R² measures the proportion of variance explained by the model.\n\nFormula:\nR² = 1 - (SS_res / SS_tot)\nWhere SS_res = residual sum of squares, SS_tot = total sum of squares\n\nInterpretation:\n• Range: 0 to 1 (can be negative for poor models)\n• 0: Model predicts mean baseline\n• 1: Perfect predictions\n\nProperties:\n• Increases with more features\n• Can't detect overfitting\n\nAdjusted R²:\n• Penalizes adding irrelevant features\n• More appropriate for model comparison\n• R²_adj = 1 - [(1-R²)(n-1)/(n-p-1)]\n\nWhen to use:\n• Model explanation\n• Comparing models on same dataset\n• Not for model selection alone",
    tags: ["r-squared", "regression", "variance", "goodness of fit"]
  },
  {
    id: 47,
    level: "intermediate",
    topic: "Decision Trees",
    question: "Can you explain the purpose of the Gini index in the context of a decision tree algorithm?",
    answer: "Gini index measures impurity or node homogeneity in decision trees.\n\nFormula:\nGini = 1 - Σ(p_i)²\nWhere p_i = proportion of class i in node\n\nProperties:\n• Range: 0 to 0.5 (binary classification)\n• 0: Perfectly pure node\n• Higher value = more impurity\n\nUsage:\n• Determines best split at each node\n• Minimizes weighted impurity after split\n• Gini = 2 × Gini (some implementations)\n\nComparison with Entropy:\n• Gini is faster to compute\n• Similar performance in practice\n• Both produce similar trees\n\nApplications:\n• Classification trees\n• Random Forest\n• Gradient Boosting",
    tags: ["gini index", "decision tree", "impurity", "splitting"]
  },
  {
    id: 48,
    level: "intermediate",
    topic: "Data Preprocessing",
    question: "How do you handle a situation where there is noise in the data?",
    answer: "Methods for handling noisy data:\n\n1. Detection:\n   • Statistical methods (z-score, IQR)\n   • Visualization (box plots, scatter plots)\n   • Domain knowledge\n\n2. Smoothing:\n   • Moving averages\n   • Exponential smoothing\n   • Loess (local regression)\n\n3. Filtering:\n   • Median filter (robust to outliers)\n   • Gaussian filter (frequency domain)\n   • Wavelet denoising\n\n4. Robust Methods:\n   • Use robust statistics (median, MAD)\n   • Robust regression (Huber, RANSAC)\n   • Algorithms less sensitive to noise (tree-based)\n\n5. Ensemble Methods:\n   • Combine multiple models\n   • Reduce impact of noisy samples\n\n6. Data Validation:\n   • Identify and correct data entry errors\n   • Implement data quality checks",
    tags: ["noise", "smoothing", "robust statistics", "filtering"]
  },
  {
    id: 49,
    level: "intermediate",
    topic: "Imbalanced Data",
    question: "How do you handle imbalanced data sets when building a classification model?",
    answer: "Comprehensive strategies for imbalanced data:\n\n1. Resampling Techniques:\n   • Random Oversampling: Duplicate minority class\n   • SMOTE: Create synthetic minority samples\n   • ADASYN: Adaptive synthetic sampling\n   • Random Undersampling: Remove majority samples\n   • Tomek Links: Remove borderline samples\n\n2. Algorithmic Approaches:\n   • Class weights: Penalize misclassifications differently\n   • Cost-sensitive learning\n   • Ensemble methods: Balanced Random Forest, EasyEnsemble\n\n3. Evaluation Metrics:\n   • Precision-Recall AUC (instead of ROC-AUC)\n   • F1 Score, F-beta Score\n   • Matthews Correlation Coefficient (MCC)\n   • Balanced Accuracy\n\n4. Data Collection:\n   • Collect more minority samples\n   • Change sampling strategy\n\n5. Anomaly Detection:\n   • Treat as anomaly detection for extreme imbalance",
    tags: ["imbalanced data", "smote", "class weights", "ensemble"]
  },
  {
    id: 50,
    level: "intermediate",
    topic: "Regularization",
    question: "Explain the purpose of the term 'regularisation' in machine learning models.",
    answer: "Regularization prevents overfitting by adding a penalty term to the loss function.\n\nTypes:\n\n1. L1 (Lasso):\n   • Adds |weights| penalty\n   • Produces sparse solutions\n   • Feature selection\n\n2. L2 (Ridge):\n   • Adds weights² penalty\n   • Shrinks weights but not to zero\n   • Handles multicollinearity\n\n3. Elastic Net:\n   • Combines L1 and L2\n   • Best of both worlds\n\n4. Dropout (Neural Networks):\n   • Randomly drops neurons during training\n   • Forces redundancy\n\n5. Early Stopping:\n   • Stop training when validation loss increases\n   • Simple but effective\n\nBenefits:\n• Reduces model complexity\n• Improves generalization\n• Prevents overfitting",
    tags: ["regularization", "l1", "l2", "dropout", "overfitting"]
  },
  {
    id: 51,
    level: "intermediate",
    topic: "Optimization",
    question: "What is the purpose of the term 'gradient descent' in the context of optimising a model?",
    answer: "Gradient descent is an iterative optimization algorithm that finds the minimum of a function by moving in the direction of steepest descent.\n\nProcess:\n1. Initialize parameters\n2. Compute gradient of loss function\n3. Update parameters: θ = θ - α × ∇J(θ)\n4. Repeat until convergence\n\nHyperparameters:\n• Learning rate (α): Step size\n• Batch size: Number of samples per iteration\n• Number of iterations\n\nVariants:\n• Batch GD: Use all data\n• Stochastic GD: Use one sample\n• Mini-batch GD: Use batch of samples\n• Momentum: Accelerates convergence\n• Adam: Adaptive learning rate\n\nChallenges:\n• Choosing learning rate\n• Local minima\n• Saddle points\n• Vanishing/exploding gradients",
    tags: ["gradient descent", "optimization", "learning rate"]
  },
  {
    id: 52,
    level: "intermediate",
    topic: "Model Evaluation",
    question: "How do you assess the performance of a classification model apart from accuracy?",
    answer: "Alternative classification metrics:\n\n1. Precision-Recall Metrics:\n   • Precision: TP/(TP+FP)\n   • Recall: TP/(TP+FN)\n   • F1 Score: 2×(P×R)/(P+R)\n   • F-beta: Weighted harmonic mean\n\n2. ROC-based Metrics:\n   • ROC-AUC: Area under ROC curve\n   • ROC curve: TPR vs FPR\n\n3. PR-based Metrics:\n   • PR-AUC: Area under PR curve (better for imbalanced data)\n   • Average Precision (AP)\n\n4. Other Metrics:\n   • Matthews Correlation Coefficient (MCC)\n   • Cohen's Kappa\n   • Log Loss\n   • Brier Score\n\n5. Business Metrics:\n   • Cost of misclassification\n   • Expected value\n   • ROI",
    tags: ["classification", "metrics", "precision", "recall", "roc-auc"]
  },
  {
    id: 53,
    level: "intermediate",
    topic: "Feature Engineering",
    question: "Can you explain the concept of 'feature selection' and its importance in model building?",
    answer: "Feature selection identifies the most relevant features for model building.\n\nMethods:\n\n1. Filter Methods:\n   • Statistical tests (chi-square, ANOVA)\n   • Correlation\n   • Mutual information\n   • Variance threshold\n\n2. Wrapper Methods:\n   • Recursive Feature Elimination (RFE)\n   • Forward/Backward selection\n   • Exhaustive search\n\n3. Embedded Methods:\n   • Lasso (L1) regularization\n   • Tree-based importance\n   • Linear model coefficients\n\nImportance:\n• Improves model performance\n• Reduces overfitting\n• Faster training and inference\n• Better interpretability\n• Reduces data collection costs\n\nBest practices:\n• Combine with domain knowledge\n• Validate with cross-validation\n• Consider feature interactions",
    tags: ["feature selection", "feature importance", "rfe", "lasso"]
  },
  {
    id: 54,
    level: "intermediate",
    topic: "Model Evaluation",
    question: "What is the purpose of the term 'cross-validation' in model training and evaluation?",
    answer: "Cross-validation assesses how well a model generalizes to unseen data.\n\nCommon types:\n\n1. K-Fold CV:\n   • Split data into k folds\n   • Train on k-1 folds, validate on 1\n   • Repeat k times\n   • Average performance\n\n2. Stratified K-Fold:\n   • Preserves class distribution\n   • Important for imbalanced data\n\n3. Leave-One-Out:\n   • k = n (sample size)\n   • High variance, computationally expensive\n\n4. Time Series Split:\n   • Maintains temporal order\n   • No future data leakage\n\nBenefits:\n• More reliable performance estimate\n• Uses data efficiently\n• Helps detect overfitting\n• Enables hyperparameter tuning\n\nBest practices:\n• Set random seed for reproducibility\n• Consider nested CV for hyperparameter tuning",
    tags: ["cross-validation", "model evaluation", "k-fold", "generalization"]
  },
  {
    id: 55,
    level: "intermediate",
    topic: "Data Preprocessing",
    question: "How do you handle missing data in a dataset while building a predictive model?",
    answer: "Missing data handling strategies:\n\n1. Understanding Missingness:\n   • MCAR: Missing Completely at Random\n   • MAR: Missing at Random\n   • MNAR: Missing Not at Random\n\n2. Deletion Methods:\n   • Listwise deletion (remove rows)\n   • Pairwise deletion (use available data)\n   • Drop columns with high missingness\n\n3. Simple Imputation:\n   • Mean/Median/Mode\n   • Forward/Backward fill (time series)\n   • Constant value (e.g., -1, 'Unknown')\n\n4. Advanced Imputation:\n   • KNN imputation\n   • MICE (Multiple Imputation)\n   • Regression imputation\n   • Deep learning imputation\n\n5. Algorithm-specific:\n   • Some models handle missing values (tree-based)\n   • Missing indicator features\n\n6. Consideration:\n   • Impact on model performance\n   • Business context",
    tags: ["missing data", "imputation", "mice", "knn imputation"]
  },
  {
    id: 56,
    level: "intermediate",
    topic: "Ensemble Learning",
    question: "Explain the purpose of the term 'ensemble learning' and its benefits in model building.",
    answer: "Ensemble learning combines multiple models to achieve better performance than any single model.\n\nTypes:\n\n1. Bagging:\n   • Train models in parallel\n   • Each on bootstrap sample\n   • Reduce variance\n   • Example: Random Forest\n\n2. Boosting:\n   • Train models sequentially\n   • Each corrects previous errors\n   • Reduce bias\n   • Examples: AdaBoost, XGBoost, LightGBM\n\n3. Stacking:\n   • Combine different model types\n   • Meta-learner on predictions\n   • Can capture different patterns\n\nBenefits:\n• Better generalization\n• Reduced overfitting\n• Handles complex patterns\n• More robust predictions\n• Often wins competitions\n\nTrade-offs:\n• Increased complexity\n• More computational resources\n• Harder to interpret",
    tags: ["ensemble", "bagging", "boosting", "stacking"]
  },
  {
    id: 57,
    level: "intermediate",
    topic: "Machine Learning",
    question: "What is the difference between unsupervised and supervised machine learning algorithms?",
    answer: "Supervised vs Unsupervised Learning:\n\nSupervised Learning:\n• Uses labeled data (X → y)\n• Goal: Learn mapping from inputs to outputs\n• Evaluation: Compare predictions to true labels\n• Applications: Classification, Regression\n• Examples: Linear regression, SVM, Random Forest\n\nUnsupervised Learning:\n• Uses unlabeled data (X only)\n• Goal: Discover hidden patterns/structure\n• Evaluation: Internal metrics (silhouette, inertia)\n• Applications: Clustering, Dimensionality reduction\n• Examples: K-Means, PCA, t-SNE\n\nSemi-supervised:\n• Mix of labeled and unlabeled data\n• Leverages both\n\nSelf-supervised:\n• Creates pseudo-labels from data\n• Popular in NLP and computer vision",
    tags: ["supervised", "unsupervised", "machine learning"]
  },
  {
    id: 58,
    level: "intermediate",
    topic: "Clustering",
    question: "Can you explain the concept of 'clustering' and provide an example of when it is used?",
    answer: "Clustering groups similar data points together based on their features.\n\nTypes:\n\n1. Centroid-based:\n   • K-Means, K-Medoids\n   • Assumes spherical clusters\n\n2. Density-based:\n   • DBSCAN, HDBSCAN\n   • Can find arbitrary shapes\n   • Handles noise\n\n3. Hierarchical:\n   • Agglomerative, Divisive\n   • Produces dendrogram\n   • No need to specify k\n\n4. Distribution-based:\n   • Gaussian Mixture Models\n   • Probabilistic assignment\n\nApplications:\n• Customer segmentation (marketing)\n• Document clustering\n• Image segmentation\n• Anomaly detection\n• Recommendation systems\n\nExample: Customer Segmentation\n• Group customers by purchase behavior\n• Target marketing campaigns\n• Personalize recommendations",
    tags: ["clustering", "kmeans", "dbscan", "segmentation"]
  },
  {
    id: 59,
    level: "intermediate",
    topic: "Dimensionality Reduction",
    question: "What is the purpose of 'dimensionality reduction' in data analysis, and how is it achieved?",
    answer: "Dimensionality reduction reduces the number of features while preserving important information.\n\nMethods:\n\n1. Feature Selection:\n   • Filter, wrapper, embedded methods\n   • Keeps original features\n\n2. Feature Extraction:\n   • Creates new features\n   • Linear: PCA, LDA\n   • Non-linear: t-SNE, UMAP, Autoencoders\n\n3. Matrix Factorization:\n   • SVD, NMF\n   • For sparse data\n\nPurpose:\n• Visualization (2D/3D)\n• Reduce computational cost\n• Remove noise\n• Mitigate curse of dimensionality\n• Improve model performance\n• Enable interpretability\n\nTrade-offs:\n• Information loss\n• Reduced interpretability (extraction methods)\n• Computational cost",
    tags: ["dimensionality reduction", "pca", "tsne", "feature extraction"]
  },
  {
    id: 60,
    level: "intermediate",
    topic: "Model Evaluation",
    question: "How do you handle the problem of overfitting in machine learning models?",
    answer: "Strategies to prevent overfitting:\n\n1. Data-related:\n   • Collect more data\n   • Data augmentation\n   • Cross-validation\n   • Train/validation/test split\n\n2. Model Complexity:\n   • Simplify model (fewer parameters)\n   • Feature selection\n   • Dimensionality reduction\n\n3. Regularization:\n   • L1 (Lasso)\n   • L2 (Ridge)\n   • Dropout (neural networks)\n   • Early stopping\n\n4. Ensemble Methods:\n   • Bagging (Random Forest)\n   • Boosting (with caution)\n\n5. Pruning:\n   • Decision tree pruning\n   • Reduce tree depth\n\n6. Hyperparameter Tuning:\n   • Cross-validation\n   • Smaller learning rate\n   • Less training epochs\n\nDetection:\n• Training error << validation error\n• Learning curves divergence",
    tags: ["overfitting", "regularization", "early stopping", "cross-validation"]
  },

  // ADVANCED LEVEL (61-100)
  {
    id: 61,
    level: "advanced",
    topic: "Machine Learning",
    question: "What is the difference between unsupervised and supervised machine learning algorithms?",
    answer: "Supervised vs Unsupervised Learning (Advanced):\n\nSupervised Learning:\n• Requires labeled data\n• Objective: Learn decision boundary\n• Evaluation: Hold-out test set\n• Use cases: Prediction, classification\n\nUnsupervised Learning:\n• No labels required\n• Objective: Discover structure\n• Evaluation: Internal metrics (silhouette, Davies-Bouldin)\n• Use cases: Exploration, compression\n\nAdvanced considerations:\n• Self-supervised learning bridges the gap\n• Semi-supervised uses both\n• Weak supervision uses noisy labels\n• Meta-learning for few-shot scenarios",
    tags: ["supervised", "unsupervised", "self-supervised"]
  },
  {
    id: 62,
    level: "advanced",
    topic: "Clustering",
    question: "Can you explain the concept of 'clustering' and provide an example of when it is used?",
    answer: "Clustering (Advanced Concepts):\n\nAdvanced clustering techniques:\n\n1. Density-Based:\n   • DBSCAN: ε-neighborhood, minPts\n   • HDBSCAN: Hierarchical DBSCAN\n   • OPTICS: Ordering points\n\n2. Spectral Clustering:\n   • Graph-based approach\n   • Uses eigenvalues of similarity matrix\n   • Handles non-convex clusters\n\n3. BIRCH:\n   • Balanced Iterative Reducing\n   • Handles large datasets\n\n4. Mean Shift:\n   • Non-parametric\n   • No need to specify k\n\nEvaluation metrics:\n• Silhouette Score\n• Davies-Bouldin Index\n• Calinski-Harabasz Index\n• Adjusted Rand Index (with ground truth)\n\nAdvanced applications:\n• Geospatial clustering\n• Graph clustering (community detection)\n• Time series clustering",
    tags: ["clustering", "dbscan", "spectral clustering", "hdbscan"]
  },
  {
    id: 63,
    level: "advanced",
    topic: "Dimensionality Reduction",
    question: "What is the purpose of 'dimensionality reduction' in data analysis, and how is it achieved?",
    answer: "Dimensionality Reduction (Advanced):\n\nAdvanced methods:\n\n1. Manifold Learning:\n   • ISOMAP: Preserves geodesic distances\n   • LLE: Local linear embeddings\n   • UMAP: Uniform manifold approximation\n   • t-SNE: Stochastic neighbor embedding\n\n2. Autoencoders:\n   • Variational Autoencoders (VAE)\n   • Denoising autoencoders\n   • Contractive autoencoders\n\n3. Linear Methods:\n   • PCA (with sparse variants)\n   • Factor Analysis\n   • Independent Component Analysis (ICA)\n\n4. Feature Aggregation:\n   • Feature hashing\n   • Feature binning\n   • Model-based aggregation\n\nTheory:\n• Johnson-Lindenstrauss lemma\n• Manifold assumption\n• Intrinsic dimensionality\n\nApplications:\n• Visualization\n• Compression\n• Pre-training",
    tags: ["dimensionality reduction", "umap", "autoencoders", "manifold learning"]
  },
  {
    id: 64,
    level: "advanced",
    topic: "Model Evaluation",
    question: "How do you handle the problem of overfitting in machine learning models?",
    answer: "Overfitting (Advanced Strategies):\n\nAdvanced prevention techniques:\n\n1. Bayesian Methods:\n   • Bayesian neural networks\n   • Gaussian processes\n   • Priors for regularization\n\n2. Advanced Regularization:\n   • Orthogonal regularization\n   • Spectral normalization\n   • Gradient penalty (WGAN)\n\n3. Architecture Design:\n   • Residual connections\n   • Batch normalization\n   • Layer normalization\n   • Attention mechanisms\n\n4. Ensemble Methods:\n   • Model averaging\n   • Bayesian model averaging\n   • Snapshot ensembles\n\n5. Data Augmentation:\n   • MixUp\n   • CutMix\n   • AutoAugment\n   • Adversarial training\n\n6. Advanced Validation:\n   • Nested cross-validation\n   • Bootstrap validation\n   • Time series cross-validation\n\n7. Complexity Control:\n   • PAC-Bayesian bounds\n   • VC dimension analysis",
    tags: ["overfitting", "regularization", "bayesian", "data augmentation"]
  },
  {
    id: 65,
    level: "advanced",
    topic: "Bayesian Methods",
    question: "Explain the purpose of the term 'Naive Bayes' in machine learning and its application.",
    answer: "Naive Bayes (Advanced):\n\nStatistical foundation:\nP(Y|X) = P(X|Y)P(Y) / P(X)\n\nIndependence assumption:\nP(X₁,...,Xₙ|Y) = Π P(Xᵢ|Y)\n\nAdvanced variants:\n\n1. Gaussian NB:\n   • Assumes normal distribution\n   • Estimate μ and σ per class\n\n2. Multinomial NB:\n   • For discrete counts\n   • Laplace smoothing\n\n3. Bernoulli NB:\n   • Binary features\n   • Document presence/absence\n\n4. Complement NB:\n   • Handles imbalanced data\n   • Better for text\n\n5. Out-of-core NB:\n   • Online learning\n   • Incremental updates\n\nApplications:\n• Spam filtering (real-time)\n• Document classification\n• Sentiment analysis\n• Medical diagnosis\n\nAdvantages:\n• Very fast training/prediction\n• Low variance\n• Handles high dimensions\n\nLimitations:\n• Independence assumption often violated\n• Poor probability estimates",
    tags: ["naive bayes", "probability", "classification"]
  },
  {
    id: 66,
    level: "advanced",
    topic: "Decision Trees",
    question: "What is the purpose of the term 'decision trees' in machine learning, and how does it work?",
    answer: "Decision Trees (Advanced):\n\nSplitting criteria:\n• Classification: Gini, Entropy, Chi-square\n• Regression: MSE, MAE, Poisson deviance\n\nAdvanced concepts:\n\n1. CART vs ID3 vs C4.5:\n   • CART: Binary splits, Gini\n   • ID3: Multiple splits, Entropy\n   • C4.5: Continuous features, pruning\n\n2. Tree Complexity:\n   • Pre-pruning: max_depth, min_samples_split\n   • Post-pruning: Cost complexity pruning\n\n3. Handling Special Cases:\n   • Missing values: Surrogate splits\n   • Categorical features: Encoding strategies\n   • Imbalanced data: Weighted splits\n\n4. Interpretability:\n   • Feature importance\n   • Decision rules extraction\n   • Partial dependence plots\n\n5. Advanced Trees:\n   • Oblique trees\n   • Mondrian forests\n   • Extremely Randomized Trees",
    tags: ["decision tree", "cart", "splitting", "pruning"]
  },
  {
    id: 67,
    level: "advanced",
    topic: "Multicollinearity",
    question: "How do you handle the problem of multicollinearity in a dataset?",
    answer: "Multicollinearity (Advanced):\n\nDetection methods:\n• Variance Inflation Factor (VIF)\n• Condition index\n• Eigenvalue analysis\n\nAdvanced handling:\n\n1. Regularization:\n   • Ridge (L2): Shrinks coefficients\n   • Elastic Net: Combines L1 and L2\n   • Lasso: Feature selection\n\n2. Dimensionality Reduction:\n   • PCA: Orthogonal components\n   • PLS: Partial Least Squares\n   • Factor Analysis\n\n3. Advanced Regression:\n   • Bayesian regression with priors\n   • Ridge regression\n   • PCR (Principal Component Regression)\n\n4. Algorithm Selection:\n   • Tree-based models (less affected)\n   • Neural networks (with regularization)\n   • Support vector machines\n\n5. Feature Engineering:\n   • Create composite features\n   • Remove correlated features\n   • Interaction terms with caution\n\nConsequences:\n• Inflated coefficient variance\n• Unstable predictions\n• Difficult interpretation",
    tags: ["multicollinearity", "vif", "ridge", "pca"]
  },
  {
    id: 68,
    level: "advanced",
    topic: "Random Forest",
    question: "Can you explain the purpose of the term 'random forest' in machine learning and its advantages?",
    answer: "Random Forest (Advanced):\n\nAlgorithm details:\n1. Bootstrap sampling (bagging)\n2. Random feature selection per split\n3. Combine via majority vote/average\n\nAdvanced features:\n\n1. Out-of-Bag (OOB) Error:\n   • Built-in validation\n   • No need for CV\n\n2. Feature Importance:\n   • Mean Decrease Impurity\n   • Permutation importance\n   • SHAP values\n\n3. Proximity Matrix:\n   • Similarity between samples\n   • Used for clustering, outlier detection\n\n4. Advanced Variants:\n   • ExtraTrees: More random splits\n   • Weighted Random Forest\n   • Quantile Regression Forest\n   • Isolation Forest (anomaly detection)\n\nAdvantages:\n• Handles high dimensions\n• No overfitting with enough trees\n• Feature importance built-in\n• Handles mixed data types\n\nHyperparameters to tune:\n• n_estimators\n• max_features\n• min_samples_split\n• class_weight",
    tags: ["random forest", "ensemble", "bagging", "feature importance"]
  },
  {
    id: 69,
    level: "advanced",
    topic: "Data Preprocessing",
    question: "What is the purpose of 'data preprocessing' in machine learning, and what are some common techniques used?",
    answer: "Data Preprocessing (Advanced):\n\nAdvanced techniques:\n\n1. Feature Engineering:\n   • Polynomial features\n   • Spline transformations\n   • Target encoding\n   • WOE (Weight of Evidence)\n   • Feature crossing\n\n2. Categorical Encoding:\n   • One-hot (with frequency threshold)\n   • Target encoding with smoothing\n   • Binary encoding\n   • CatBoost encoding\n   • Entity embeddings\n\n3. Scaling:\n   • Robust scaling (median, IQR)\n   • Quantile transformation\n   • Power transformation (Box-Cox, Yeo-Johnson)\n\n4. Handling Imbalance:\n   • SMOTE variants (Borderline, SVM, K-Means)\n   • ADASYN\n   • Synthetic data generation\n\n5. Time Series:\n   • Differencing\n   • Seasonal decomposition\n   • Rolling statistics\n   • Fourier transforms\n\n6. Text Preprocessing:\n   • Tokenization, stemming, lemmatization\n   • TF-IDF, Word2Vec, BERT\n   • Subword tokenization",
    tags: ["preprocessing", "encoding", "scaling", "feature engineering"]
  },
  {
    id: 70,
    level: "advanced",
    topic: "Model Evaluation",
    question: "How do you handle the problem of underfitting in a machine learning model?",
    answer: "Underfitting (Advanced):\n\nCauses:\n• Model too simple\n• Too much regularization\n• Not enough features\n• Poor feature representation\n\nSolutions:\n\n1. Increase Model Complexity:\n   • Add more layers/neurons (neural nets)\n   • Use non-linear models\n   • Reduce regularization\n   • Add polynomial features\n\n2. Feature Engineering:\n   • Create interaction terms\n   • Add domain-specific features\n   • Use feature crosses\n   • Embeddings for categorical\n\n3. Algorithm Selection:\n   • Use more powerful algorithms\n   • Ensemble methods\n   • Deep learning for complex patterns\n\n4. Hyperparameter Tuning:\n   • Reduce regularization strength\n   • Increase learning rate\n   • More training epochs\n\n5. Data Quality:\n   • Check for data issues\n   • Ensure representative samples\n   • Collect more informative features\n\n6. Model Architecture:\n   • Residual connections\n   • Attention mechanisms\n   • Deeper networks",
    tags: ["underfitting", "model complexity", "bias"]
  },
  {
    id: 71,
    level: "advanced",
    topic: "Hyperparameter Tuning",
    question: "Explain the concept of 'hyperparameter tuning' in machine learning algorithms.",
    answer: "Hyperparameter Tuning (Advanced):\n\nSearch strategies:\n\n1. Grid Search:\n   • Exhaustive search over parameter grid\n   • Works well for small spaces\n   • Parallelizable\n\n2. Random Search:\n   • Samples random combinations\n   • More efficient for high dimensions\n   • Can find good combinations faster\n\n3. Bayesian Optimization:\n   • Uses probabilistic model\n   • Gaussian Processes, TPE\n   • Efficient for expensive evaluations\n\n4. Evolutionary Algorithms:\n   • Genetic algorithms\n   • Population-based search\n\n5. Gradient-based Optimization:\n   • Hypergradient descent\n   • Differentiable hyperparameters\n\nAdvanced techniques:\n• Nested cross-validation\n• Hyperparameter importance\n• Multi-fidelity optimization (Hyperband)\n• Automated ML (AutoML)\n\nConsiderations:\n• Computational budget\n• Parameter interactions\n• Early stopping\n• Reproducibility",
    tags: ["hyperparameter tuning", "grid search", "bayesian optimization", "automl"]
  },
  {
    id: 72,
    level: "advanced",
    topic: "Statistics",
    question: "What is the purpose of 'ANOVA' (Analysis of Variance) in statistical analysis, and when is it used?",
    answer: "ANOVA (Advanced):\n\nPurpose: Compares means across multiple groups.\n\nTypes:\n\n1. One-way ANOVA:\n   • One categorical independent variable\n   • Tests: F-statistic = between-group variance / within-group variance\n\n2. Two-way ANOVA:\n   • Two categorical independent variables\n   • Main effects and interaction effects\n\n3. MANOVA:\n   • Multiple dependent variables\n   • Multivariate analysis\n\n4. Repeated Measures ANOVA:\n   • Same subjects measured multiple times\n   • Accounts for within-subject correlation\n\nAssumptions:\n• Normality of residuals\n• Homogeneity of variances\n• Independence of observations\n\nPost-hoc tests:\n• Tukey HSD\n• Bonferroni correction\n• Scheffé's method\n\nWhen to use:\n• Comparing treatment effects\n• A/B testing with multiple variants\n• Quality control\n• Experimental design",
    tags: ["anova", "statistics", "hypothesis testing", "variance analysis"]
  },
  {
    id: 73,
    level: "advanced",
    topic: "Outliers",
    question: "How do you handle a situation where the data has outliers?",
    answer: "Outlier Handling (Advanced):\n\nDetection methods:\n\n1. Statistical:\n   • Modified Z-score (median-based)\n   • MAD (Median Absolute Deviation)\n   • Grubbs' test\n   • Dixon's Q test\n\n2. Machine Learning:\n   • Isolation Forest\n   • Local Outlier Factor (LOF)\n   • One-Class SVM\n   • DBSCAN\n\n3. Visualization:\n   • Box plots (with IQR)\n   • QQ plots\n   • Mahalanobis distance\n\nTreatment strategies:\n\n1. Transformation:\n   • Winsorization (capping)\n   • Log transformation\n   • Box-Cox transformation\n\n2. Robust Methods:\n   • Huber regression\n   • RANSAC\n   • Quantile regression\n\n3. Algorithm Selection:\n   • Tree-based models (robust)\n   • Robust covariance estimators\n\n4. Domain-Specific:\n   • Business rules\n   • Validate with domain experts\n   • Consider if outliers represent valid edge cases",
    tags: ["outliers", "anomaly detection", "robust statistics", "isolation forest"]
  },
  {
    id: 74,
    level: "advanced",
    topic: "Bias-Variance",
    question: "Explain the concept of 'bias' in machine learning models.",
    answer: "Bias-Variance Decomposition (Advanced):\n\nBias:\n• Error from incorrect assumptions\n• Underfitting indicator\n• High bias: Model too simple\n\nVariance:\n• Sensitivity to training data\n• Overfitting indicator\n• High variance: Model too complex\n\nBias-Variance Trade-off:\nTotal Error = Bias² + Variance + Irreducible Error\n\nMathematical formulation:\nBias² = E[(f̄(x) - f(x))²]\nVariance = E[(f̂(x) - f̄(x))²]\n\nSources of bias:\n• Feature representation\n• Model architecture\n• Regularization strength\n• Data quality\n\nManaging bias:\n• More complex models\n• Better feature engineering\n• Less regularization\n• Ensemble methods (boosting reduces bias)\n\nEvaluation:\n• Learning curves\n• Validation curves",
    tags: ["bias", "variance", "bias-variance tradeoff", "underfitting"]
  },
  {
    id: 75,
    level: "advanced",
    topic: "Regression",
    question: "What is the purpose of the 'mean squared error' metric in regression analysis?",
    answer: "MSE (Advanced):\n\nFormula: MSE = (1/n) Σ(y_i - ŷ_i)²\n\nProperties:\n• Differentiable (useful for optimization)\n• Penalizes large errors quadratically\n• Scale-dependent\n\nAdvanced considerations:\n\n1. Robustness:\n   • MSE sensitive to outliers\n   • Alternatives: MAE, Huber loss\n\n2. Decomposition:\n   • MSE = Bias² + Variance + Noise\n\n3. Bayesian Interpretation:\n   • Corresponds to Gaussian likelihood\n   • Maximum likelihood estimation\n\n4. Related metrics:\n   • RMSE: Same units as target\n   • RMSLE: Log-scale errors\n   • MAPE: Percentage errors\n\n5. Use Cases:\n   • Training loss (differentiable)\n   • Model comparison (same scale)\n   • Gradient-based optimization\n\n6. Limitations:\n   • Not scale-invariant\n   • Penalizes large errors heavily\n   • May prioritize large magnitude samples",
    tags: ["mse", "regression", "loss function", "evaluation"]
  },
  {
    id: 76,
    level: "advanced",
    topic: "Similarity Metrics",
    question: "Can you explain the purpose of the term 'cosine similarity' in similarity measurements?",
    answer: "Cosine Similarity (Advanced):\n\nFormula: cos(θ) = (A·B) / (||A|| ||B||)\n\nProperties:\n• Range: [-1, 1]\n• Independent of magnitude\n• Only direction matters\n\nApplications:\n\n1. Text Mining:\n   • Document similarity\n   • TF-IDF vectors\n   • Word embeddings\n\n2. Recommendation Systems:\n   • Item similarity\n   • User similarity\n\n3. Clustering:\n   • Spherical clustering\n   • Text cluster validation\n\n4. Information Retrieval:\n   • Query-document matching\n   • Ranking\n\n5. Computer Vision:\n   • Feature vector similarity\n   • Face recognition\n\nAdvantages:\n• Scale-invariant\n• Works well with sparse data\n• Efficient for high dimensions\n\nLimitations:\n• Assumes unit vectors\n• No magnitude information\n\nAlternatives:\n• Pearson correlation\n• Euclidean distance\n• Manhattan distance",
    tags: ["cosine similarity", "text mining", "recommendation systems"]
  },
  {
    id: 77,
    level: "advanced",
    topic: "Time Series",
    question: "How do you handle a situation where the data has a time component?",
    answer: "Time Series (Advanced):\n\nAdvanced methods:\n\n1. Classical Methods:\n   • ARIMA/SARIMA (seasonal)\n   • VAR (multivariate)\n   • State Space Models\n   • Holt-Winters\n\n2. Machine Learning:\n   • Feature engineering: lags, rolling stats\n   • XGBoost with time features\n   • LightGBM for forecasting\n\n3. Deep Learning:\n   • LSTM/GRU with attention\n   • TCN (Temporal Convolutional Networks)\n   • Transformer for time series\n   • Informer (long sequence)\n\n4. Probabilistic:\n   • Prophet (Facebook)\n   • Gaussian Process for time series\n   • Bayesian structural time series\n\n5. Advanced Concepts:\n   • Cointegration\n   • Changepoint detection\n   • Anomaly detection in time series\n   • Causal impact\n\nValidation:\n• Time series split\n• Walk-forward validation\n• Rolling forecast\n\nChallenges:\n• Stationarity\n• Seasonality\n• Trend\n• Missing values",
    tags: ["time series", "forecasting", "arima", "lstm", "prophet"]
  },
  {
    id: 78,
    level: "advanced",
    topic: "Classification",
    question: "Explain the concept of 'precision' and 'recall' in the context of classification models.",
    answer: "Precision and Recall (Advanced):\n\nMathematical definitions:\nPrecision = TP/(TP+FP)\nRecall = TP/(TP+FN)\n\nAdvanced concepts:\n\n1. Precision-Recall Curve:\n   • Trade-off visualization\n   • Area under PR curve (AUPRC)\n   • Better for imbalanced data\n\n2. F-beta Score:\n   • F₁ = harmonic mean (β=1)\n   • F₂ = recall weighted (β=2)\n   • F₀.₅ = precision weighted\n\n3. Multi-class Extensions:\n   • Macro-average\n   • Micro-average\n   • Weighted average\n\n4. Statistical Properties:\n   • Precision depends on class balance\n   • Recall is base-rate invariant\n\n5. Business Applications:\n   • Precision for spam detection\n   • Recall for disease screening\n\n6. Optimization:\n   • Threshold tuning\n   • Cost-sensitive learning\n   • Precision-recall optimization",
    tags: ["precision", "recall", "f1 score", "classification metrics"]
  },
  {
    id: 79,
    level: "advanced",
    topic: "Big Data",
    question: "What is the purpose of the 'Hadoop' framework in big data processing, and how is it used?",
    answer: "Hadoop (Advanced):\n\nCore components:\n\n1. HDFS (Hadoop Distributed File System):\n   • Distributed storage\n   • Data replication\n   • Fault tolerance\n\n2. MapReduce:\n   • Distributed processing model\n   • Map: Parallel processing\n   • Reduce: Aggregation\n\n3. YARN (Yet Another Resource Negotiator):\n   • Resource management\n   • Job scheduling\n\nEcosystem:\n• Hive: SQL-like queries\n• HBase: NoSQL database\n• Pig: Data flow language\n• Spark: In-memory processing (faster)\n• Oozie: Workflow scheduling\n\nUse cases:\n• Batch processing\n• ETL pipelines\n• Large-scale log analysis\n• Data warehousing\n\nLimitations:\n• High latency\n• Complex operations\n• Disk-based processing\n\nModern alternatives:\n• Apache Spark\n• Apache Flink\n• Cloud solutions (AWS EMR, Databricks)",
    tags: ["hadoop", "big data", "mapreduce", "hdfs"]
  },
  {
    id: 80,
    level: "advanced",
    topic: "Data Quality",
    question: "How do you handle a situation where the data has a lot of noise?",
    answer: "Noise Handling (Advanced):\n\nTypes of noise:\n• Measurement noise\n• Label noise (mislabeling)\n• Data entry errors\n• Sensor errors\n\nDetection methods:\n\n1. Statistical:\n   • Z-score, IQR\n   • Cook's distance\n   • Leverage scores\n\n2. Machine Learning:\n   • Isolation Forest\n   • Autoencoders for anomaly detection\n   • Cleanlab for label errors\n\n3. Consensus Methods:\n   • Multiple annotators\n   • Label aggregation (Dawid-Skene)\n\nTreatment strategies:\n\n1. Robust Algorithms:\n   • Huber loss\n   • Quantile regression\n   • Trimmed estimators\n\n2. Data Cleaning:\n   • Smoothing (moving average)\n   • Filtering (Kalman, Wiener)\n   • Outlier removal\n\n3. Ensemble Methods:\n   • Bootstrap aggregation\n   • Model averaging\n\n4. Label Correction:\n   • Active learning\n   • Weak supervision\n   • Probabilistic labels",
    tags: ["noise", "robust methods", "anomaly detection", "data quality"]
  },
  {
    id: 81,
    level: "advanced",
    topic: "Statistics",
    question: "Explain the concept of 'correlation' in statistics and its different types.",
    answer: "Correlation (Advanced):\n\nTypes:\n\n1. Pearson Correlation:\n   • Measures linear relationship\n   • Range: [-1, 1]\n   • r = Cov(X,Y)/(σₓσᵧ)\n\n2. Spearman Rank Correlation:\n   • Monotonic relationship\n   • Rank-based\n   • Robust to outliers\n\n3. Kendall's Tau:\n   • Concordant pairs\n   • Less sensitive to ties\n\n4. Partial Correlation:\n   • Controlling for other variables\n   • Causal inference\n\n5. Distance Correlation:\n   • Measures any dependence\n   • Zero implies independence\n\nAdvanced concepts:\n• Correlation vs causation\n• Spurious correlation\n• Correlation matrix\n• Multicolinearity\n\nApplications:\n• Feature selection\n• Exploratory data analysis\n• Portfolio optimization\n• Factor analysis\n\nLimitations:\n• Only linear relationships\n• Sensitive to outliers\n• Doesn't imply causation",
    tags: ["correlation", "pearson", "spearman", "statistics"]
  },
  {
    id: 82,
    level: "advanced",
    topic: "KNN",
    question: "What is the purpose of the 'k-nearest neighbours' algorithm in machine learning, and how does it work?",
    answer: "KNN (Advanced):\n\nAlgorithm details:\n1. Lazy learning (no training phase)\n2. Stores all training data\n3. Distance-based prediction\n\nAdvanced considerations:\n\n1. Distance Metrics:\n   • Minkowski distance (generalized)\n   • Mahalanobis (correlated features)\n   • Hamming (categorical)\n   • Jaccard (set similarity)\n\n2. Weighted KNN:\n   • Inverse distance weighting\n   • Kernel weighting\n   • Reduce impact of distant neighbors\n\n3. Efficiency Improvements:\n   • KD-trees\n   • Ball trees\n   • Locality-sensitive hashing (LSH)\n   • Approximate nearest neighbors\n\n4. K Selection:\n   • Cross-validation\n   • Heuristics: √n\n   • Odd numbers for binary\n\n5. Dimensionality Issues:\n   • Curse of dimensionality\n   • Feature selection required\n   • PCA before KNN\n\n6. Variants:\n   • Radius neighbors\n   • Nearest centroid\n   • Locally weighted learning",
    tags: ["knn", "distance metrics", "lazy learning", "curse of dimensionality"]
  },
  {
    id: 83,
    level: "advanced",
    topic: "Categorical Data",
    question: "How do you handle a situation where the data has a lot of categorical variables?",
    answer: "Categorical Variables (Advanced):\n\nEncoding strategies:\n\n1. Traditional:\n   • One-hot (with frequency cap)\n   • Label encoding (ordinal)\n   • Binary encoding\n   • Frequency encoding\n\n2. Advanced:\n   • Target encoding with smoothing\n   • CatBoost encoding\n   • WOE (Weight of Evidence)\n   • Leave-one-out encoding\n   • Feature hashing\n\n3. Entity Embeddings:\n   • Neural network embeddings\n   • Dense representations\n   • Capture relationships\n   • Transfer learning\n\n4. For High Cardinality:\n   • Group rare categories\n   • Clustering categories\n   • Dimensionality reduction on encoded features\n   • Embeddings for large vocabularies\n\n5. Model Selection:\n   • Tree-based models (handle categorical natively)\n   • Linear models (need encoding)\n   • CatBoost (optimized for categorical)\n\nConsiderations:\n• Target leakage (target encoding)\n• Overfitting (cross-validation)\n• Interpretability",
    tags: ["categorical encoding", "target encoding", "embeddings", "one-hot"]
  },
  {
    id: 84,
    level: "advanced",
    topic: "SVM",
    question: "Explain the purpose of the 'SVM' (Support Vector Machine) algorithm in machine learning, and its advantages.",
    answer: "SVM (Advanced):\n\nMathematical foundation:\n• Maximizes margin: 2/||w||\n• Soft margin: C·Σξᵢ + (1/2)||w||²\n• Dual formulation: Σαᵢ - ½ΣαᵢαⱼyᵢyⱼK(xᵢ,xⱼ)\n\nKernel methods:\n• Polynomial: (γ·xᵀx' + r)^d\n• RBF: exp(-γ||x-x'||²)\n• Sigmoid: tanh(γ·xᵀx' + r)\n• Custom kernels (string, graph)\n\nAdvantages:\n• Effective in high dimensions\n• Memory efficient (support vectors)\n• Handles non-linear through kernels\n• Convex optimization (global optimum)\n\nLimitations:\n• Not scalable to large datasets (O(n²) to O(n³))\n• Kernel selection\n• Hyperparameter tuning (C, γ)\n• Feature scaling required\n\nExtensions:\n• SVR (Support Vector Regression)\n• One-class SVM (anomaly detection)\n• Structured SVM\n• Multi-class (one-vs-one, one-vs-rest)\n\nApplications:\n• Image classification\n• Bioinformatics\n• Handwriting recognition",
    tags: ["svm", "kernel", "margin", "support vectors"]
  },
  {
    id: 85,
    level: "advanced",
    topic: "Deep Learning",
    question: "What is the purpose of the 'LSTM' (Long Short-Term Memory) network in deep learning, and how is it used?",
    answer: "LSTM (Advanced):\n\nArchitecture details:\n\n1. Cell State (cₜ): Long-term memory\n2. Hidden State (hₜ): Short-term memory\n\nGates:\n• Forget Gate: fₜ = σ(W_f·[hₜ₋₁, xₜ] + b_f)\n• Input Gate: iₜ = σ(W_i·[hₜ₋₁, xₜ] + b_i)\n• Candidate: Ĉₜ = tanh(W_c·[hₜ₋₁, xₜ] + b_c)\n• Output Gate: oₜ = σ(W_o·[hₜ₋₁, xₜ] + b_o)\n• Update: cₜ = fₜ*cₜ₋₁ + iₜ*Ĉₜ\n• Output: hₜ = oₜ*tanh(cₜ)\n\nVariants:\n• GRU (Gated Recurrent Unit): Simplified\n• Bi-directional LSTM: Both directions\n• Stacked LSTM: Multiple layers\n• Peephole connections\n\nAdvanced applications:\n• Machine translation (seq2seq)\n• Speech recognition\n• Text generation\n• Music generation\n• Video analysis\n• Time series forecasting\n\nChallenges:\n• Vanishing gradients (mitigated)\n• Long sequences (still challenging)\n• Computational cost\n• Interpretability\n\nAlternatives:\n• Transformers (self-attention)\n• TCN (Temporal Convolutional Networks)\n• Attention mechanisms",
    tags: ["lstm", "rnn", "deep learning", "sequential data"]
  },
  {
    id: 86,
    level: "advanced",
    topic: "PCA",
    question: "Can you explain the purpose of the term 'Principal Component Analysis' (PCA) in dimensionality reduction, and how is it used?",
    answer: "PCA (Advanced):\n\nMathematical formulation:\n1. Center the data: X - μ\n2. Compute covariance matrix: Σ = (1/(n-1))XᵀX\n3. Eigendecomposition: Σ = VΛVᵀ\n4. Project: Z = XV_k\n\nProperties:\n• Maximizes variance\n• Minimizes reconstruction error\n• Components are orthogonal\n\nAdvanced variants:\n\n1. Kernel PCA:\n   • Non-linear extension\n   • Kernel trick\n\n2. Sparse PCA:\n   • Sparse loadings\n   • Better interpretability\n\n3. Incremental PCA:\n   • Online learning\n   • Handles streaming data\n\n4. Randomized PCA:\n   • Faster for large datasets\n   • Approximate solution\n\nApplications:\n• Visualization (2D/3D)\n• Noise reduction\n• Feature extraction\n• Compression\n• Preprocessing for other algorithms\n\nLimitations:\n• Assumes linear relationships\n• Components may be hard to interpret\n• Scaling sensitive\n\nInterpretation:\n• Explained variance ratio\n• Biplot visualization\n• Loadings analysis",
    tags: ["pca", "dimensionality reduction", "eigenvalues", "variance"]
  },
  {
    id: 87,
    level: "advanced",
    topic: "Clustering",
    question: "Explain the concept of 'k-means clustering' and its application in unsupervised learning.",
    answer: "K-Means (Advanced):\n\nAlgorithm details:\n1. Initialize K centroids\n2. Assignment step: Each point to nearest centroid\n3. Update step: Recompute centroids as means\n4. Repeat until convergence\n\nOptimization:\n• Objective: Minimize WCSS = Σ||x - μ_k||²\n• Local minima (random restarts)\n• K-means++ initialization\n\nAdvanced variants:\n\n1. Mini-batch K-Means:\n   • Scalable to large datasets\n   • Stochastic updates\n\n2. K-Medoids:\n   • Uses actual points as centers\n   • Robust to outliers\n\n3. Fuzzy C-Means:\n   • Soft assignments\n   • Membership probabilities\n\n4. X-Means:\n   • Automatically selects K\n   • Bayesian information criterion\n\nApplications:\n• Customer segmentation\n• Image compression\n• Anomaly detection\n• Document clustering\n\nLimitations:\n• Assumes spherical clusters\n• Sensitive to initialization\n• Requires scaling\n• Struggles with varying densities\n\nEvaluation:\n• Elbow method\n• Silhouette score\n• Gap statistic",
    tags: ["kmeans", "clustering", "unsupervised", "centroid-based"]
  },
  {
    id: 88,
    level: "advanced",
    topic: "Regression",
    question: "What is the purpose of the 'R-squared' metric in regression analysis, and what does it indicate about the model's fit?",
    answer: "R-squared (Advanced):\n\nFormula: R² = 1 - SS_res/SS_tot\n\nInterpretation:\n• Proportion of variance explained\n• Range: (-∞, 1]\n• 1: Perfect fit\n• 0: Mean baseline\n• Negative: Worse than mean\n\nAdvanced concepts:\n\n1. Adjusted R²:\n   • R²_adj = 1 - (1-R²)(n-1)/(n-p-1)\n   • Penalizes adding features\n   • Better for model comparison\n\n2. Predicted R²:\n   • PRESS statistic\n   • Predictive capability\n\n3. Limitations:\n   • Not for non-linear models\n   • Doesn't indicate bias\n   • Can increase with irrelevant features\n   • Not meaningful for certain domains\n\n4. Alternatives:\n   • RMSE, MAE\n   • AIC, BIC\n   • Mallow's Cp\n\n5. Use Cases:\n   • Model explanation\n   • Comparing models on same dataset\n   • Understanding fit quality\n\n6. Pitfalls:\n   • Overfitting with many features\n   • Not comparable across datasets\n   • Doesn't guarantee good predictions",
    tags: ["r-squared", "regression", "goodness of fit", "variance explained"]
  },
  {
    id: 89,
    level: "advanced",
    topic: "t-SNE",
    question: "What is the purpose of the term 't-Distributed Stochastic Neighbour Embedding' (t-SNE) in dimensionality reduction, and how is it used?",
    answer: "t-SNE (Advanced):\n\nAlgorithm overview:\n1. Compute pairwise similarities in high-dim space\n   • Gaussian distribution, perplexity parameter\n2. Compute pairwise similarities in low-dim space\n   • t-distribution (heavier tails)\n3. Minimize KL divergence between distributions\n\nKey parameters:\n• Perplexity: Balance between local/global structure\n• Learning rate: Optimization step size\n• Early exaggeration: Cluster separation\n\nProperties:\n• Preserves local structure\n• Non-linear\n• Stochastic nature (different runs)\n\nApplications:\n• Visualization of high-dim data\n• Cluster validation\n• Exploratory data analysis\n\nLimitations:\n• Not for general dimensionality reduction (no out-of-sample)\n• Computationally expensive (O(n²))\n• Sensitive to hyperparameters\n• Cannot reconstruct original space\n\nBest practices:\n• Run PCA first for noise reduction\n• Multiple runs for stability\n• Experiment with perplexity\n• Not for inference/prediction\n\nAlternatives:\n• UMAP (faster, preserves more structure)\n• PCA (linear, interpretable)\n• LLE (local linear embeddings)",
    tags: ["tsne", "dimensionality reduction", "visualization", "manifold learning"]
  },
  {
    id: 90,
    level: "advanced",
    topic: "Classification",
    question: "Explain the purpose of the 'F1 score' metric in evaluating classification models and its relationship with precision and recall.",
    answer: "F1 Score (Advanced):\n\nFormula: F1 = 2 × (Precision × Recall) / (Precision + Recall)\n\nProperties:\n• Harmonic mean (not arithmetic)\n• Ranges: [0, 1]\n• Penalizes extreme imbalance\n• Balanced trade-off\n\nMathematical properties:\n• Harmonic mean is more conservative\n• F1 = 1 when both precision and recall = 1\n• F1 = 0 when either precision or recall = 0\n\nVariants:\n• Fβ = (1+β²) × (P×R)/(β²×P + R)\n  - β=2: Recall weighted\n  - β=0.5: Precision weighted\n• Macro F1: Average of per-class F1\n• Micro F1: Global precision/recall\n• Weighted F1: Weighted by class support\n\nWhen to use:\n• Imbalanced datasets\n• When both FP and FN are important\n• Model comparison\n\nWhen to avoid:\n• When need probability calibration\n• When business costs differ\n• When one metric dominates\n\nInterpretation:\n• F1 = 0.5: Poor balance\n• F1 = 0.8: Good balance\n• F1 = 0.9+: Excellent",
    tags: ["f1 score", "precision", "recall", "classification metrics"]
  },
  {
    id: 91,
    level: "advanced",
    topic: "Neural Networks",
    question: "Can you explain the concept of 'backpropagation' in neural networks and its role in training the model?",
    answer: "Backpropagation (Advanced):\n\nAlgorithm overview:\n1. Forward pass: Compute predictions\n2. Compute loss: L = loss(y, ŷ)\n3. Backward pass: Compute gradients\n4. Update weights: w ← w - η·∇L\n\nChain rule application:\n∂L/∂w = ∂L/∂ŷ × ∂ŷ/∂z × ∂z/∂w\n\nComponents:\n• Activation function derivatives\n• Loss function derivatives\n• Gradient accumulation\n\nAdvanced concepts:\n\n1. Vanishing/Exploding Gradients:\n   • Causes: Activation functions, depth\n   • Solutions: ReLU, batch norm, residual connections\n\n2. Gradient Checkpointing:\n   • Memory-efficient training\n   • Recomputation vs storage\n\n3. Automatic Differentiation:\n   • Computational graphs\n   • Forward vs reverse mode\n   • TensorFlow/PyTorch implementations\n\n4. Second-order Methods:\n   • Newton's method\n   • Gauss-Newton\n   • Natural gradient\n\n5. Backpropagation Through Time:\n   • For RNNs\n   • Truncated BPTT\n\nTraining optimizations:\n• Gradient clipping\n• Learning rate scheduling\n• Weight initialization",
    tags: ["backpropagation", "neural networks", "gradient descent", "chain rule"]
  },
  {
    id: 92,
    level: "advanced",
    topic: "Statistics",
    question: "What is the purpose of the 'chi-square test' in statistics, and when is it used?",
    answer: "Chi-square Test (Advanced):\n\nTypes:\n\n1. Goodness of Fit:\n   • Compares observed vs expected frequencies\n   • Tests if distribution matches expected\n   • χ² = Σ[(O-E)²/E]\n\n2. Independence Test:\n   • Tests if two categorical variables are independent\n   • Contingency table analysis\n   • Used for feature selection\n\n3. Homogeneity Test:\n   • Tests if multiple populations have same distribution\n   • Similar to independence but different sampling\n\nAssumptions:\n• Expected frequency ≥ 5 (usually)\n• Observations independent\n• Categorical variables\n\nApplications:\n• A/B testing\n• Feature selection (classification)\n• Model fit evaluation\n• Population comparisons\n\nLimitations:\n• Large sample requirement\n• Not for continuous data\n• Doesn't indicate strength\n\nAlternatives:\n• Fisher's exact test (small samples)\n• G-test (likelihood ratio)\n• Cramér's V (effect size)",
    tags: ["chi-square", "hypothesis testing", "categorical", "feature selection"]
  },
  {
    id: 93,
    level: "advanced",
    topic: "Data Transformation",
    question: "How do you handle a situation where the data is not normally distributed?",
    answer: "Non-Normal Data (Advanced):\n\nTransformations:\n\n1. Power Transformations:\n   • Box-Cox: y^λ for y>0\n   • Yeo-Johnson: Handles negative values\n   • Parameter estimation via MLE\n\n2. Quantile Transformation:\n   • Rank-based\n   • Gaussian quantiles\n   • Uniform quantiles\n\n3. Non-parametric Methods:\n   • Wilcoxon tests\n   • Mann-Whitney U\n   • Kruskal-Wallis\n\n4. Robust Methods:\n   • Median-based statistics\n   • Bootstrapping\n   • Robust regression\n\n5. Model Selection:\n   • GLM (generalized linear models)\n   • Distribution-specific models\n   • Tree-based models (no assumptions)\n\n6. Bayesian Approaches:\n   • Specify appropriate likelihood\n   • Hierarchical models\n\nAssessment:\n• QQ plots\n• Shapiro-Wilk test\n• Kolmogorov-Smirnov test\n\nWhen transformation fails:\n• Use robust methods\n• Choose appropriate distributions\n• Non-parametric alternatives",
    tags: ["non-normal", "box-cox", "transformations", "robust methods"]
  },
  {
    id: 94,
    level: "advanced",
    topic: "Factor Analysis",
    question: "Explain the concept of 'latent variables' in the context of factor analysis and its importance.",
    answer: "Latent Variables (Advanced):\n\nDefinition:\n• Unobserved variables inferred from observed variables\n• Represent underlying constructs\n\nFactor Analysis:\n\n1. Exploratory Factor Analysis (EFA):\n   • Discover underlying structure\n   • Rotation methods (Varimax, Promax)\n   • Factor loadings interpretation\n\n2. Confirmatory Factor Analysis (CFA):\n   • Test hypothesized structure\n   • SEM framework\n   • Model fit indices\n\nMathematical model:\nX = Λξ + ε\nWhere:\nX: Observed variables\nΛ: Factor loadings\nξ: Latent factors\nε: Measurement error\n\nApplications:\n• Psychology/psychometrics\n• Marketing (brand perception)\n• Customer satisfaction\n• Feature engineering\n\nAdvanced extensions:\n• Structural Equation Modeling (SEM)\n• Item Response Theory (IRT)\n• Latent Class Analysis (LCA)\n\nImportance:\n• Dimensionality reduction\n• Measurement validation\n• Construct representation\n• Causal inference\n\nInterpretation:\n• Factor loadings\n• Communalities\n• Explained variance",
    tags: ["latent variables", "factor analysis", "sem", "psychometrics"]
  },
  {
    id: 95,
    level: "advanced",
    topic: "Decision Trees",
    question: "What is the purpose of the 'Gini index' in decision trees, and how is it used in the context of building the tree?",
    answer: "Gini Index (Advanced):\n\nFormula: Gini = 1 - Σ(p_i)²\n\nProperties:\n• Measures node impurity\n• Range: 0 (pure) to (1-1/K) (max impurity)\n• Binary: Gini = 2p(1-p)\n\nSplitting criterion:\nWeighted Gini = (n_left/n) × Gini_left + (n_right/n) × Gini_right\n\nComparison with Entropy:\n• Gini faster to compute (no log)\n• Similar performance\n• Both produce similar splits\n• Gini tends to isolate most frequent class\n\nMathematical properties:\n• Gini is variance of class distribution\n• Related to misclassification error\n• Convex function\n\nInterpretation:\n• Gini = 0: All samples same class\n• Gini = 0.5: Balanced classes\n\nImplementation:\n• CART algorithm uses Gini\n• Random Forest uses Gini\n• Gradient Boosting often uses entropy\n\nLimitations:\n• Biased towards majority class\n• Favors splits with many categories\n• Not for regression tasks",
    tags: ["gini index", "decision tree", "impurity", "splitting"]
  },
  {
    id: 96,
    level: "advanced",
    topic: "Feature Engineering",
    question: "How do you handle a situation where the data has a lot of continuous variables?",
    answer: "Continuous Variables (Advanced):\n\nHandling strategies:\n\n1. Scaling Methods:\n   • Standardization (Z-score)\n   • Min-Max normalization\n   • Robust scaling (median, IQR)\n   • Unit vector scaling\n\n2. Discretization:\n   • Equal width binning\n   • Equal frequency binning\n   • K-means discretization\n   • Decision tree discretization\n\n3. Transformation:\n   • Power transforms (Box-Cox, Yeo-Johnson)\n   • Log/sqrt for skewness\n   • Trigonometric (periodic features)\n\n4. Feature Engineering:\n   • Polynomial features\n   • Spline basis functions\n   • Interaction terms\n   • Aggregated features (rolling stats)\n\n5. Dimensionality Reduction:\n   • PCA (for correlated continuous)\n   • Autoencoders\n   • Feature selection\n\n6. Model Selection:\n   • Tree-based (handles continuous well)\n   • Neural networks (need scaling)\n   • Distance-based (need scaling)\n\nConsiderations:\n• Distribution characteristics\n• Domain meaning\n• Model requirements",
    tags: ["continuous variables", "scaling", "discretization", "feature engineering"]
  },
  {
    id: 97,
    level: "advanced",
    topic: "Association Rules",
    question: "Explain the purpose of 'association rules' in data mining, and provide an example of its application.",
    answer: "Association Rules (Advanced):\n\nMetrics:\n• Support: P(A∩B) = count(A∩B)/total\n• Confidence: P(B|A) = support(A∪B)/support(A)\n• Lift: confidence / support(B)\n• Leverage: support(A∪B) - support(A)×support(B)\n• Conviction: (1-support(B))/(1-confidence)\n\nAdvanced algorithms:\n• FP-Growth (more efficient than Apriori)\n• Eclat (vertical data format)\n• RARM (for large databases)\n\nRule generation:\n• Frequent itemset mining\n• Rule pruning (min confidence, lift)\n• Rule ranking\n\nApplications:\n\n1. Market Basket Analysis:\n   • Find products frequently bought together\n   • Cross-selling recommendations\n   • Store layout optimization\n\n2. Medical Diagnosis:\n   • Symptom-disease associations\n   • Drug interactions\n\n3. Web Usage Mining:\n   • Navigation patterns\n   • Clickstream analysis\n\n4. Fraud Detection:\n   • Fraudulent transaction patterns\n   • Unusual behavior detection\n\nChallenges:\n• Many rules generated\n• Spurious associations\n• Computational complexity\n• Rare itemset problem",
    tags: ["association rules", "apriori", "market basket", "data mining"]
  },
  {
    id: 98,
    level: "advanced",
    topic: "Logistic Regression",
    question: "What is the purpose of the 'logistic function' in logistic regression, and how is it used for binary classification?",
    answer: "Logistic Function (Advanced):\n\nSigmoid function:\nσ(z) = 1/(1 + e^{-z})\n\nProperties:\n• Range: (0, 1)\n• S-shaped curve\n• Differentiable everywhere\n• σ(-z) = 1 - σ(z)\n\nLogistic Regression:\nP(y=1|x) = σ(wᵀx + b)\n\nMathematical foundations:\n\n1. Odds: p/(1-p) = e^{wᵀx+b}\n2. Log-odds: log(p/(1-p)) = wᵀx+b\n3. Decision boundary: wᵀx + b = 0\n\nMaximum Likelihood Estimation:\n• Loss: Negative log-likelihood (binary cross-entropy)\n• No closed-form solution\n• Gradient descent optimization\n\nExtensions:\n• Multinomial logistic regression (softmax)\n• Ordinal logistic regression\n• L1/L2 regularization\n\nInterpretation:\n• Coefficients: log-odds change per unit change\n• Exponentiated coefficients: odds ratios\n\nAssumptions:\n• Linear decision boundary\n• No multicollinearity\n• Independent observations\n\nApplications:\n• Binary classification\n• Probability calibration\n• Risk scoring models",
    tags: ["logistic regression", "sigmoid", "binary classification", "odds"]
  },
  {
    id: 99,
    level: "advanced",
    topic: "Missing Data",
    question: "How do you handle a situation where the data has a lot of missing values?",
    answer: "High Missing Data (Advanced):\n\nMissingness mechanisms:\n• MCAR: Missing Completely at Random\n• MAR: Missing at Random\n• MNAR: Missing Not at Random\n\nAdvanced imputation methods:\n\n1. Multiple Imputation:\n   • MICE (Multivariate Imputation by Chained Equations)\n   • Creates multiple plausible datasets\n   • Accounts for imputation uncertainty\n   • Rubin's rules for pooling\n\n2. Machine Learning Imputation:\n   • KNN imputation (distance-based)\n   • Random Forest imputation (MissForest)\n   • Autoencoders for imputation\n   • Matrix factorization\n\n3. Probabilistic Methods:\n   • Expectation-Maximization (EM)\n   • Bayesian imputation\n   • Variational inference\n\n4. Feature Engineering:\n   • Missing indicator features\n   • Domain-specific imputation\n   • Time series interpolation\n\n5. Model-based:\n   • XGBoost handles missing natively\n   • Surrogate splits in trees\n   • Missingness as informative\n\n6. Threshold-based:\n   • Drop columns with > X% missing\n   • Evaluate trade-off\n\nEvaluation:\n• Imputation quality metrics\n• Sensitivity analysis\n• Cross-validation with missing",
    tags: ["missing data", "imputation", "mice", "multiple imputation"]
  },
  {
    id: 100,
    level: "advanced",
    topic: "Ensemble Learning",
    question: "Explain the concept of 'bagging' and 'boosting' in ensemble learning, and provide an example of when each technique is used.",
    answer: "Bagging vs Boosting (Advanced):\n\nBagging (Bootstrap Aggregating):\n• Parallel training on bootstrap samples\n• Models are independent\n• Reduces variance\n• Example: Random Forest\n• When to use: High variance models (deep trees)\n\nBoosting:\n• Sequential training with error correction\n• Models are dependent\n• Reduces bias\n• Examples: AdaBoost, XGBoost, LightGBM\n• When to use: Weak learners (shallow trees)\n\nComparison:\n\n| Aspect | Bagging | Boosting |\n|--------|---------|----------|\n| Training | Parallel | Sequential |\n| Weighting | Equal | Error-based |\n| Focus | Variance reduction | Bias reduction |\n| Overfitting | Less prone | More careful needed |\n| Interpretability | Harder | Harder |\n\nAdvanced variants:\n• Gradient Boosting (GBM, XGBoost)\n• Stochastic Gradient Boosting\n• LightGBM (leaf-wise growth)\n• CatBoost (categorical features)\n• Histogram-based GBDT\n\nWhen to use each:\n• Bagging: Stable models, variance reduction\n• Boosting: Achieve high accuracy, bias reduction\n\nEnsemble diversity:\n• Data diversity (bagging)\n• Feature diversity (Random Forest)\n• Model diversity (stacking)\n• Parameter diversity",
    tags: ["bagging", "boosting", "ensemble", "random forest", "xgboost"]
  }
];

export const topicsList = [...new Set(dataScienceQuestions.map(q => q.topic))];
export const levelsList = ["basic", "intermediate", "advanced"];