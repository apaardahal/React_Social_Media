"use strict";
// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// YOU CAN REGENERATE IT USING yarn generate:lib
Object.defineProperty(exports, "__esModule", { value: true });
exports.webworker = void 0;
const base_config_1 = require("./base-config");
exports.webworker = {
    AddEventListenerOptions: base_config_1.TYPE,
    AesCbcParams: base_config_1.TYPE,
    AesCtrParams: base_config_1.TYPE,
    AesDerivedKeyParams: base_config_1.TYPE,
    AesGcmParams: base_config_1.TYPE,
    AesKeyAlgorithm: base_config_1.TYPE,
    AesKeyGenParams: base_config_1.TYPE,
    Algorithm: base_config_1.TYPE,
    BlobPropertyBag: base_config_1.TYPE,
    CacheQueryOptions: base_config_1.TYPE,
    CanvasRenderingContext2DSettings: base_config_1.TYPE,
    ClientQueryOptions: base_config_1.TYPE,
    CloseEventInit: base_config_1.TYPE,
    CryptoKeyPair: base_config_1.TYPE,
    CustomEventInit: base_config_1.TYPE,
    DOMMatrix2DInit: base_config_1.TYPE,
    DOMMatrixInit: base_config_1.TYPE,
    DOMPointInit: base_config_1.TYPE,
    DOMQuadInit: base_config_1.TYPE,
    DOMRectInit: base_config_1.TYPE,
    DevicePermissionDescriptor: base_config_1.TYPE,
    EcKeyGenParams: base_config_1.TYPE,
    EcKeyImportParams: base_config_1.TYPE,
    EcdhKeyDeriveParams: base_config_1.TYPE,
    EcdsaParams: base_config_1.TYPE,
    ErrorEventInit: base_config_1.TYPE,
    EventInit: base_config_1.TYPE,
    EventListenerOptions: base_config_1.TYPE,
    EventSourceInit: base_config_1.TYPE,
    ExtendableEventInit: base_config_1.TYPE,
    ExtendableMessageEventInit: base_config_1.TYPE,
    FetchEventInit: base_config_1.TYPE,
    FilePropertyBag: base_config_1.TYPE,
    GetNotificationOptions: base_config_1.TYPE,
    HkdfParams: base_config_1.TYPE,
    HmacImportParams: base_config_1.TYPE,
    HmacKeyGenParams: base_config_1.TYPE,
    IDBIndexParameters: base_config_1.TYPE,
    IDBObjectStoreParameters: base_config_1.TYPE,
    IDBVersionChangeEventInit: base_config_1.TYPE,
    ImageBitmapOptions: base_config_1.TYPE,
    ImageBitmapRenderingContextSettings: base_config_1.TYPE,
    ImageEncodeOptions: base_config_1.TYPE,
    ImportMeta: base_config_1.TYPE,
    JsonWebKey: base_config_1.TYPE,
    KeyAlgorithm: base_config_1.TYPE,
    MessageEventInit: base_config_1.TYPE,
    MidiPermissionDescriptor: base_config_1.TYPE,
    MultiCacheQueryOptions: base_config_1.TYPE,
    NavigationPreloadState: base_config_1.TYPE,
    NotificationAction: base_config_1.TYPE,
    NotificationEventInit: base_config_1.TYPE,
    NotificationOptions: base_config_1.TYPE,
    Pbkdf2Params: base_config_1.TYPE,
    PerformanceObserverInit: base_config_1.TYPE,
    PermissionDescriptor: base_config_1.TYPE,
    PostMessageOptions: base_config_1.TYPE,
    ProgressEventInit: base_config_1.TYPE,
    PromiseRejectionEventInit: base_config_1.TYPE,
    PushEventInit: base_config_1.TYPE,
    PushPermissionDescriptor: base_config_1.TYPE,
    PushSubscriptionJSON: base_config_1.TYPE,
    PushSubscriptionOptionsInit: base_config_1.TYPE,
    QueuingStrategy: base_config_1.TYPE,
    QueuingStrategyInit: base_config_1.TYPE,
    ReadableStreamDefaultReadDoneResult: base_config_1.TYPE,
    ReadableStreamDefaultReadValueResult: base_config_1.TYPE,
    ReadableWritablePair: base_config_1.TYPE,
    RegistrationOptions: base_config_1.TYPE,
    RequestInit: base_config_1.TYPE,
    ResponseInit: base_config_1.TYPE,
    RsaHashedImportParams: base_config_1.TYPE,
    RsaHashedKeyGenParams: base_config_1.TYPE,
    RsaKeyGenParams: base_config_1.TYPE,
    RsaOaepParams: base_config_1.TYPE,
    RsaOtherPrimesInfo: base_config_1.TYPE,
    RsaPssParams: base_config_1.TYPE,
    StorageEstimate: base_config_1.TYPE,
    StreamPipeOptions: base_config_1.TYPE,
    SyncEventInit: base_config_1.TYPE,
    TextDecodeOptions: base_config_1.TYPE,
    TextDecoderOptions: base_config_1.TYPE,
    TextEncoderEncodeIntoResult: base_config_1.TYPE,
    Transformer: base_config_1.TYPE,
    UnderlyingSink: base_config_1.TYPE,
    UnderlyingSource: base_config_1.TYPE,
    WebGLContextAttributes: base_config_1.TYPE,
    WebGLContextEventInit: base_config_1.TYPE,
    WorkerOptions: base_config_1.TYPE,
    EventListener: base_config_1.TYPE,
    ANGLE_instanced_arrays: base_config_1.TYPE,
    AbortController: base_config_1.TYPE_VALUE,
    AbortSignalEventMap: base_config_1.TYPE,
    AbortSignal: base_config_1.TYPE_VALUE,
    AbstractWorkerEventMap: base_config_1.TYPE,
    AbstractWorker: base_config_1.TYPE,
    AesCfbParams: base_config_1.TYPE,
    AesCmacParams: base_config_1.TYPE,
    AnimationFrameProvider: base_config_1.TYPE,
    Blob: base_config_1.TYPE_VALUE,
    Body: base_config_1.TYPE,
    BroadcastChannelEventMap: base_config_1.TYPE,
    BroadcastChannel: base_config_1.TYPE_VALUE,
    ByteLengthQueuingStrategy: base_config_1.TYPE_VALUE,
    Cache: base_config_1.TYPE_VALUE,
    CacheStorage: base_config_1.TYPE_VALUE,
    CanvasCompositing: base_config_1.TYPE,
    CanvasDrawImage: base_config_1.TYPE,
    CanvasDrawPath: base_config_1.TYPE,
    CanvasFillStrokeStyles: base_config_1.TYPE,
    CanvasFilters: base_config_1.TYPE,
    CanvasGradient: base_config_1.TYPE_VALUE,
    CanvasImageData: base_config_1.TYPE,
    CanvasImageSmoothing: base_config_1.TYPE,
    CanvasPath: base_config_1.TYPE,
    CanvasPathDrawingStyles: base_config_1.TYPE,
    CanvasPattern: base_config_1.TYPE_VALUE,
    CanvasRect: base_config_1.TYPE,
    CanvasShadowStyles: base_config_1.TYPE,
    CanvasState: base_config_1.TYPE,
    CanvasText: base_config_1.TYPE,
    CanvasTextDrawingStyles: base_config_1.TYPE,
    CanvasTransform: base_config_1.TYPE,
    Client: base_config_1.TYPE_VALUE,
    Clients: base_config_1.TYPE_VALUE,
    CloseEvent: base_config_1.TYPE_VALUE,
    ConcatParams: base_config_1.TYPE,
    CountQueuingStrategy: base_config_1.TYPE_VALUE,
    Crypto: base_config_1.TYPE_VALUE,
    CryptoKey: base_config_1.TYPE_VALUE,
    CustomEvent: base_config_1.TYPE_VALUE,
    DOMException: base_config_1.TYPE_VALUE,
    DOMMatrix: base_config_1.TYPE_VALUE,
    DOMMatrixReadOnly: base_config_1.TYPE_VALUE,
    DOMPoint: base_config_1.TYPE_VALUE,
    DOMPointReadOnly: base_config_1.TYPE_VALUE,
    DOMQuad: base_config_1.TYPE_VALUE,
    DOMRect: base_config_1.TYPE_VALUE,
    DOMRectReadOnly: base_config_1.TYPE_VALUE,
    DOMStringList: base_config_1.TYPE_VALUE,
    DedicatedWorkerGlobalScopeEventMap: base_config_1.TYPE,
    DedicatedWorkerGlobalScope: base_config_1.TYPE_VALUE,
    DhImportKeyParams: base_config_1.TYPE,
    DhKeyAlgorithm: base_config_1.TYPE,
    DhKeyDeriveParams: base_config_1.TYPE,
    DhKeyGenParams: base_config_1.TYPE,
    EXT_blend_minmax: base_config_1.TYPE,
    EXT_frag_depth: base_config_1.TYPE,
    EXT_sRGB: base_config_1.TYPE,
    EXT_shader_texture_lod: base_config_1.TYPE,
    EXT_texture_filter_anisotropic: base_config_1.TYPE,
    ErrorEvent: base_config_1.TYPE_VALUE,
    Event: base_config_1.TYPE_VALUE,
    EventListenerObject: base_config_1.TYPE,
    EventSourceEventMap: base_config_1.TYPE,
    EventSource: base_config_1.TYPE_VALUE,
    EventTarget: base_config_1.TYPE_VALUE,
    ExtendableEvent: base_config_1.TYPE_VALUE,
    ExtendableMessageEvent: base_config_1.TYPE_VALUE,
    FetchEvent: base_config_1.TYPE_VALUE,
    File: base_config_1.TYPE_VALUE,
    FileList: base_config_1.TYPE_VALUE,
    FileReaderEventMap: base_config_1.TYPE,
    FileReader: base_config_1.TYPE_VALUE,
    FileReaderSync: base_config_1.TYPE_VALUE,
    FormData: base_config_1.TYPE_VALUE,
    GenericTransformStream: base_config_1.TYPE,
    Headers: base_config_1.TYPE_VALUE,
    IDBArrayKey: base_config_1.TYPE,
    IDBCursor: base_config_1.TYPE_VALUE,
    IDBCursorWithValue: base_config_1.TYPE_VALUE,
    IDBDatabaseEventMap: base_config_1.TYPE,
    IDBDatabase: base_config_1.TYPE_VALUE,
    IDBFactory: base_config_1.TYPE_VALUE,
    IDBIndex: base_config_1.TYPE_VALUE,
    IDBKeyRange: base_config_1.TYPE_VALUE,
    IDBObjectStore: base_config_1.TYPE_VALUE,
    IDBOpenDBRequestEventMap: base_config_1.TYPE,
    IDBOpenDBRequest: base_config_1.TYPE_VALUE,
    IDBRequestEventMap: base_config_1.TYPE,
    IDBRequest: base_config_1.TYPE_VALUE,
    IDBTransactionEventMap: base_config_1.TYPE,
    IDBTransaction: base_config_1.TYPE_VALUE,
    IDBVersionChangeEvent: base_config_1.TYPE_VALUE,
    ImageBitmap: base_config_1.TYPE_VALUE,
    ImageBitmapRenderingContext: base_config_1.TYPE_VALUE,
    ImageData: base_config_1.TYPE_VALUE,
    MessageChannel: base_config_1.TYPE_VALUE,
    MessageEvent: base_config_1.TYPE_VALUE,
    MessagePortEventMap: base_config_1.TYPE,
    MessagePort: base_config_1.TYPE_VALUE,
    NavigationPreloadManager: base_config_1.TYPE_VALUE,
    NavigatorConcurrentHardware: base_config_1.TYPE,
    NavigatorID: base_config_1.TYPE,
    NavigatorLanguage: base_config_1.TYPE,
    NavigatorOnLine: base_config_1.TYPE,
    NavigatorStorage: base_config_1.TYPE,
    NotificationEventMap: base_config_1.TYPE,
    Notification: base_config_1.TYPE_VALUE,
    NotificationEvent: base_config_1.TYPE_VALUE,
    OES_element_index_uint: base_config_1.TYPE,
    OES_standard_derivatives: base_config_1.TYPE,
    OES_texture_float: base_config_1.TYPE,
    OES_texture_float_linear: base_config_1.TYPE,
    OES_texture_half_float: base_config_1.TYPE,
    OES_texture_half_float_linear: base_config_1.TYPE,
    OES_vertex_array_object: base_config_1.TYPE,
    OffscreenCanvas: base_config_1.TYPE_VALUE,
    OffscreenCanvasRenderingContext2D: base_config_1.TYPE_VALUE,
    Path2D: base_config_1.TYPE_VALUE,
    PerformanceEventMap: base_config_1.TYPE,
    Performance: base_config_1.TYPE_VALUE,
    PerformanceEntry: base_config_1.TYPE_VALUE,
    PerformanceMark: base_config_1.TYPE_VALUE,
    PerformanceMeasure: base_config_1.TYPE_VALUE,
    PerformanceObserver: base_config_1.TYPE_VALUE,
    PerformanceObserverEntryList: base_config_1.TYPE_VALUE,
    PerformanceResourceTiming: base_config_1.TYPE_VALUE,
    PermissionStatusEventMap: base_config_1.TYPE,
    PermissionStatus: base_config_1.TYPE_VALUE,
    Permissions: base_config_1.TYPE_VALUE,
    ProgressEvent: base_config_1.TYPE_VALUE,
    PromiseRejectionEvent: base_config_1.TYPE_VALUE,
    PushEvent: base_config_1.TYPE_VALUE,
    PushManager: base_config_1.TYPE_VALUE,
    PushMessageData: base_config_1.TYPE_VALUE,
    PushSubscription: base_config_1.TYPE_VALUE,
    PushSubscriptionOptions: base_config_1.TYPE_VALUE,
    ReadableStream: base_config_1.TYPE_VALUE,
    ReadableStreamDefaultController: base_config_1.TYPE_VALUE,
    ReadableStreamDefaultReader: base_config_1.TYPE_VALUE,
    ReadableStreamGenericReader: base_config_1.TYPE,
    Request: base_config_1.TYPE_VALUE,
    Response: base_config_1.TYPE_VALUE,
    ServiceWorkerEventMap: base_config_1.TYPE,
    ServiceWorker: base_config_1.TYPE_VALUE,
    ServiceWorkerContainerEventMap: base_config_1.TYPE,
    ServiceWorkerContainer: base_config_1.TYPE_VALUE,
    ServiceWorkerGlobalScopeEventMap: base_config_1.TYPE,
    ServiceWorkerGlobalScope: base_config_1.TYPE_VALUE,
    ServiceWorkerRegistrationEventMap: base_config_1.TYPE,
    ServiceWorkerRegistration: base_config_1.TYPE_VALUE,
    SharedWorker: base_config_1.TYPE_VALUE,
    SharedWorkerGlobalScopeEventMap: base_config_1.TYPE,
    SharedWorkerGlobalScope: base_config_1.TYPE_VALUE,
    StorageManager: base_config_1.TYPE_VALUE,
    SubtleCrypto: base_config_1.TYPE_VALUE,
    SyncEvent: base_config_1.TYPE_VALUE,
    SyncManager: base_config_1.TYPE_VALUE,
    TextDecoder: base_config_1.TYPE_VALUE,
    TextDecoderCommon: base_config_1.TYPE,
    TextDecoderStream: base_config_1.TYPE_VALUE,
    TextEncoder: base_config_1.TYPE_VALUE,
    TextEncoderCommon: base_config_1.TYPE,
    TextEncoderStream: base_config_1.TYPE_VALUE,
    TextMetrics: base_config_1.TYPE_VALUE,
    TransformStream: base_config_1.TYPE_VALUE,
    TransformStreamDefaultController: base_config_1.TYPE_VALUE,
    URL: base_config_1.TYPE_VALUE,
    URLSearchParams: base_config_1.TYPE_VALUE,
    WEBGL_color_buffer_float: base_config_1.TYPE,
    WEBGL_compressed_texture_astc: base_config_1.TYPE,
    WEBGL_compressed_texture_s3tc: base_config_1.TYPE,
    WEBGL_compressed_texture_s3tc_srgb: base_config_1.TYPE,
    WEBGL_debug_renderer_info: base_config_1.TYPE,
    WEBGL_debug_shaders: base_config_1.TYPE,
    WEBGL_depth_texture: base_config_1.TYPE,
    WEBGL_draw_buffers: base_config_1.TYPE,
    WEBGL_lose_context: base_config_1.TYPE,
    WebGL2RenderingContext: base_config_1.TYPE_VALUE,
    WebGL2RenderingContextBase: base_config_1.TYPE,
    WebGL2RenderingContextOverloads: base_config_1.TYPE,
    WebGLActiveInfo: base_config_1.TYPE_VALUE,
    WebGLBuffer: base_config_1.TYPE_VALUE,
    WebGLContextEvent: base_config_1.TYPE_VALUE,
    WebGLFramebuffer: base_config_1.TYPE_VALUE,
    WebGLProgram: base_config_1.TYPE_VALUE,
    WebGLQuery: base_config_1.TYPE_VALUE,
    WebGLRenderbuffer: base_config_1.TYPE_VALUE,
    WebGLRenderingContext: base_config_1.TYPE_VALUE,
    WebGLRenderingContextBase: base_config_1.TYPE,
    WebGLRenderingContextOverloads: base_config_1.TYPE,
    WebGLSampler: base_config_1.TYPE_VALUE,
    WebGLShader: base_config_1.TYPE_VALUE,
    WebGLShaderPrecisionFormat: base_config_1.TYPE_VALUE,
    WebGLSync: base_config_1.TYPE_VALUE,
    WebGLTexture: base_config_1.TYPE_VALUE,
    WebGLTransformFeedback: base_config_1.TYPE_VALUE,
    WebGLUniformLocation: base_config_1.TYPE_VALUE,
    WebGLVertexArrayObject: base_config_1.TYPE_VALUE,
    WebGLVertexArrayObjectOES: base_config_1.TYPE,
    WebSocketEventMap: base_config_1.TYPE,
    WebSocket: base_config_1.TYPE_VALUE,
    WindowClient: base_config_1.TYPE_VALUE,
    WindowOrWorkerGlobalScope: base_config_1.TYPE,
    WorkerEventMap: base_config_1.TYPE,
    Worker: base_config_1.TYPE_VALUE,
    WorkerGlobalScopeEventMap: base_config_1.TYPE,
    WorkerGlobalScope: base_config_1.TYPE_VALUE,
    WorkerLocation: base_config_1.TYPE_VALUE,
    WorkerNavigator: base_config_1.TYPE_VALUE,
    WritableStream: base_config_1.TYPE_VALUE,
    WritableStreamDefaultController: base_config_1.TYPE_VALUE,
    WritableStreamDefaultWriter: base_config_1.TYPE_VALUE,
    XMLHttpRequestEventMap: base_config_1.TYPE,
    XMLHttpRequest: base_config_1.TYPE_VALUE,
    XMLHttpRequestEventTargetEventMap: base_config_1.TYPE,
    XMLHttpRequestEventTarget: base_config_1.TYPE_VALUE,
    XMLHttpRequestUpload: base_config_1.TYPE_VALUE,
    EventListenerOrEventListenerObject: base_config_1.TYPE,
    Console: base_config_1.TYPE,
    WebAssembly: base_config_1.TYPE_VALUE,
    FrameRequestCallback: base_config_1.TYPE,
    OnErrorEventHandlerNonNull: base_config_1.TYPE,
    PerformanceObserverCallback: base_config_1.TYPE,
    QueuingStrategySize: base_config_1.TYPE,
    TransformerFlushCallback: base_config_1.TYPE,
    TransformerStartCallback: base_config_1.TYPE,
    TransformerTransformCallback: base_config_1.TYPE,
    UnderlyingSinkAbortCallback: base_config_1.TYPE,
    UnderlyingSinkCloseCallback: base_config_1.TYPE,
    UnderlyingSinkStartCallback: base_config_1.TYPE,
    UnderlyingSinkWriteCallback: base_config_1.TYPE,
    UnderlyingSourceCancelCallback: base_config_1.TYPE,
    UnderlyingSourcePullCallback: base_config_1.TYPE,
    UnderlyingSourceStartCallback: base_config_1.TYPE,
    VoidFunction: base_config_1.TYPE,
    HeadersInit: base_config_1.TYPE,
    BodyInit: base_config_1.TYPE,
    RequestInfo: base_config_1.TYPE,
    BlobPart: base_config_1.TYPE,
    DOMHighResTimeStamp: base_config_1.TYPE,
    CanvasImageSource: base_config_1.TYPE,
    OffscreenRenderingContext: base_config_1.TYPE,
    MessageEventSource: base_config_1.TYPE,
    ImageBitmapSource: base_config_1.TYPE,
    OnErrorEventHandler: base_config_1.TYPE,
    TimerHandler: base_config_1.TYPE,
    PerformanceEntryList: base_config_1.TYPE,
    PushMessageDataInit: base_config_1.TYPE,
    ReadableStreamReader: base_config_1.TYPE,
    ReadableStreamController: base_config_1.TYPE,
    VibratePattern: base_config_1.TYPE,
    AlgorithmIdentifier: base_config_1.TYPE,
    HashAlgorithmIdentifier: base_config_1.TYPE,
    BigInteger: base_config_1.TYPE,
    NamedCurve: base_config_1.TYPE,
    GLenum: base_config_1.TYPE,
    GLboolean: base_config_1.TYPE,
    GLbitfield: base_config_1.TYPE,
    GLint: base_config_1.TYPE,
    GLsizei: base_config_1.TYPE,
    GLintptr: base_config_1.TYPE,
    GLsizeiptr: base_config_1.TYPE,
    GLuint: base_config_1.TYPE,
    GLfloat: base_config_1.TYPE,
    GLclampf: base_config_1.TYPE,
    TexImageSource: base_config_1.TYPE,
    Float32List: base_config_1.TYPE,
    Int32List: base_config_1.TYPE,
    GLint64: base_config_1.TYPE,
    GLuint64: base_config_1.TYPE,
    Uint32List: base_config_1.TYPE,
    BufferSource: base_config_1.TYPE,
    DOMTimeStamp: base_config_1.TYPE,
    FormDataEntryValue: base_config_1.TYPE,
    IDBValidKey: base_config_1.TYPE,
    Transferable: base_config_1.TYPE,
    ReadableStreamDefaultReadResult: base_config_1.TYPE,
    BinaryType: base_config_1.TYPE,
    CanvasDirection: base_config_1.TYPE,
    CanvasFillRule: base_config_1.TYPE,
    CanvasLineCap: base_config_1.TYPE,
    CanvasLineJoin: base_config_1.TYPE,
    CanvasTextAlign: base_config_1.TYPE,
    CanvasTextBaseline: base_config_1.TYPE,
    ClientTypes: base_config_1.TYPE,
    ColorSpaceConversion: base_config_1.TYPE,
    EndingType: base_config_1.TYPE,
    FrameType: base_config_1.TYPE,
    IDBCursorDirection: base_config_1.TYPE,
    IDBRequestReadyState: base_config_1.TYPE,
    IDBTransactionMode: base_config_1.TYPE,
    ImageOrientation: base_config_1.TYPE,
    ImageSmoothingQuality: base_config_1.TYPE,
    KeyFormat: base_config_1.TYPE,
    KeyType: base_config_1.TYPE,
    KeyUsage: base_config_1.TYPE,
    NotificationDirection: base_config_1.TYPE,
    NotificationPermission: base_config_1.TYPE,
    OffscreenRenderingContextId: base_config_1.TYPE,
    PermissionName: base_config_1.TYPE,
    PermissionState: base_config_1.TYPE,
    PremultiplyAlpha: base_config_1.TYPE,
    PushEncryptionKeyName: base_config_1.TYPE,
    PushPermissionState: base_config_1.TYPE,
    ReferrerPolicy: base_config_1.TYPE,
    RequestCache: base_config_1.TYPE,
    RequestCredentials: base_config_1.TYPE,
    RequestDestination: base_config_1.TYPE,
    RequestMode: base_config_1.TYPE,
    RequestRedirect: base_config_1.TYPE,
    ResizeQuality: base_config_1.TYPE,
    ResponseType: base_config_1.TYPE,
    ServiceWorkerState: base_config_1.TYPE,
    ServiceWorkerUpdateViaCache: base_config_1.TYPE,
    VisibilityState: base_config_1.TYPE,
    WebGLPowerPreference: base_config_1.TYPE,
    WorkerType: base_config_1.TYPE,
    XMLHttpRequestResponseType: base_config_1.TYPE,
};
//# sourceMappingURL=webworker.js.map