(function() {var implementors = {};
implementors["naga"] = [{"text":"impl&lt;T&gt; Serialize for Handle&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for Arena&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Header","synthetic":false,"types":[]},{"text":"impl Serialize for EarlyDepthTest","synthetic":false,"types":[]},{"text":"impl Serialize for ConservativeDepth","synthetic":false,"types":[]},{"text":"impl Serialize for ShaderStage","synthetic":false,"types":[]},{"text":"impl Serialize for StorageClass","synthetic":false,"types":[]},{"text":"impl Serialize for BuiltIn","synthetic":false,"types":[]},{"text":"impl Serialize for VectorSize","synthetic":false,"types":[]},{"text":"impl Serialize for ScalarKind","synthetic":false,"types":[]},{"text":"impl Serialize for ArraySize","synthetic":false,"types":[]},{"text":"impl Serialize for MemberOrigin","synthetic":false,"types":[]},{"text":"impl Serialize for Interpolation","synthetic":false,"types":[]},{"text":"impl Serialize for StructMember","synthetic":false,"types":[]},{"text":"impl Serialize for ImageDimension","synthetic":false,"types":[]},{"text":"impl Serialize for StorageAccess","synthetic":false,"types":[]},{"text":"impl Serialize for StorageFormat","synthetic":false,"types":[]},{"text":"impl Serialize for ImageClass","synthetic":false,"types":[]},{"text":"impl Serialize for Type","synthetic":false,"types":[]},{"text":"impl Serialize for TypeInner","synthetic":false,"types":[]},{"text":"impl Serialize for Constant","synthetic":false,"types":[]},{"text":"impl Serialize for ConstantInner","synthetic":false,"types":[]},{"text":"impl Serialize for Binding","synthetic":false,"types":[]},{"text":"impl Serialize for GlobalUse","synthetic":false,"types":[]},{"text":"impl Serialize for GlobalVariable","synthetic":false,"types":[]},{"text":"impl Serialize for LocalVariable","synthetic":false,"types":[]},{"text":"impl Serialize for UnaryOperator","synthetic":false,"types":[]},{"text":"impl Serialize for BinaryOperator","synthetic":false,"types":[]},{"text":"impl Serialize for DerivativeAxis","synthetic":false,"types":[]},{"text":"impl Serialize for RelationalFunction","synthetic":false,"types":[]},{"text":"impl Serialize for MathFunction","synthetic":false,"types":[]},{"text":"impl Serialize for SampleLevel","synthetic":false,"types":[]},{"text":"impl Serialize for Expression","synthetic":false,"types":[]},{"text":"impl Serialize for SwitchCase","synthetic":false,"types":[]},{"text":"impl Serialize for Statement","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionArgument","synthetic":false,"types":[]},{"text":"impl Serialize for Function","synthetic":false,"types":[]},{"text":"impl Serialize for EntryPoint","synthetic":false,"types":[]},{"text":"impl Serialize for Module","synthetic":false,"types":[]}];
implementors["ron"] = [{"text":"impl Serialize for Value","synthetic":false,"types":[]},{"text":"impl Serialize for PrettyConfig","synthetic":false,"types":[]},{"text":"impl Serialize for Map","synthetic":false,"types":[]},{"text":"impl Serialize for Extensions","synthetic":false,"types":[]}];
implementors["wgpu"] = [{"text":"impl&lt;V&gt; Serialize for LoadOp&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;V&gt; Serialize for Operations&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["wgpu_core"] = [{"text":"impl&lt;'a&gt; Serialize for BindGroupEntry&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for BindGroupDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for BindGroupLayoutDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for PipelineLayoutDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for BufferBinding","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for BindingResource&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for RenderBundleEncoderDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for Rect&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for LoadOp","synthetic":false,"types":[]},{"text":"impl Serialize for StoreOp","synthetic":false,"types":[]},{"text":"impl&lt;V&gt; Serialize for PassChannel&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for ColorAttachmentDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for DepthStencilAttachmentDescriptor","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for Action&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for Command","synthetic":false,"types":[]},{"text":"impl Serialize for HostMap","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for Id&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for AdapterInfo","synthetic":false,"types":[]},{"text":"impl Serialize for DeviceType","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for ShaderModuleDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for ProgrammableStageDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for ComputePipelineDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for VertexBufferDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for VertexStateDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for RenderPipelineDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for TextureViewDescriptor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for SamplerDescriptor&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["wgpu_types"] = [{"text":"impl Serialize for Backend","synthetic":false,"types":[]},{"text":"impl Serialize for PowerPreference","synthetic":false,"types":[]},{"text":"impl Serialize for BackendBit","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; Serialize for RequestAdapterOptions&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for Features","synthetic":false,"types":[]},{"text":"impl Serialize for Limits","synthetic":false,"types":[]},{"text":"impl&lt;L&gt; Serialize for DeviceDescriptor&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for ShaderStage","synthetic":false,"types":[]},{"text":"impl Serialize for ShaderFlags","synthetic":false,"types":[]},{"text":"impl Serialize for TextureViewDimension","synthetic":false,"types":[]},{"text":"impl Serialize for BlendFactor","synthetic":false,"types":[]},{"text":"impl Serialize for BlendOperation","synthetic":false,"types":[]},{"text":"impl Serialize for BlendDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for ColorStateDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for PrimitiveTopology","synthetic":false,"types":[]},{"text":"impl Serialize for FrontFace","synthetic":false,"types":[]},{"text":"impl Serialize for CullMode","synthetic":false,"types":[]},{"text":"impl Serialize for PolygonMode","synthetic":false,"types":[]},{"text":"impl Serialize for RasterizationStateDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for TextureFormat","synthetic":false,"types":[]},{"text":"impl Serialize for ColorWrite","synthetic":false,"types":[]},{"text":"impl Serialize for StencilStateDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for DepthStencilStateDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for IndexFormat","synthetic":false,"types":[]},{"text":"impl Serialize for StencilOperation","synthetic":false,"types":[]},{"text":"impl Serialize for StencilStateFaceDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for CompareFunction","synthetic":false,"types":[]},{"text":"impl Serialize for InputStepMode","synthetic":false,"types":[]},{"text":"impl Serialize for VertexAttributeDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for VertexFormat","synthetic":false,"types":[]},{"text":"impl Serialize for BufferUsage","synthetic":false,"types":[]},{"text":"impl&lt;L&gt; Serialize for BufferDescriptor&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L&gt; Serialize for CommandEncoderDescriptor&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for PresentMode","synthetic":false,"types":[]},{"text":"impl Serialize for TextureUsage","synthetic":false,"types":[]},{"text":"impl Serialize for SwapChainDescriptor","synthetic":false,"types":[]},{"text":"impl Serialize for Color","synthetic":false,"types":[]},{"text":"impl Serialize for TextureDimension","synthetic":false,"types":[]},{"text":"impl Serialize for Origin3d","synthetic":false,"types":[]},{"text":"impl Serialize for Extent3d","synthetic":false,"types":[]},{"text":"impl&lt;L&gt; Serialize for TextureDescriptor&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for TextureAspect","synthetic":false,"types":[]},{"text":"impl Serialize for AddressMode","synthetic":false,"types":[]},{"text":"impl Serialize for FilterMode","synthetic":false,"types":[]},{"text":"impl Serialize for PushConstantRange","synthetic":false,"types":[]},{"text":"impl&lt;L&gt; Serialize for CommandBufferDescriptor&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L&gt; Serialize for RenderBundleDescriptor&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for TextureDataLayout","synthetic":false,"types":[]},{"text":"impl Serialize for BufferBindingType","synthetic":false,"types":[]},{"text":"impl Serialize for TextureSampleType","synthetic":false,"types":[]},{"text":"impl Serialize for StorageTextureAccess","synthetic":false,"types":[]},{"text":"impl Serialize for BindingType","synthetic":false,"types":[]},{"text":"impl Serialize for BindGroupLayoutEntry","synthetic":false,"types":[]},{"text":"impl&lt;B&gt; Serialize for BufferCopyView&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for TextureCopyView&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for SamplerBorderColor","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()